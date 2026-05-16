# Tiny HTTP server with CORS to serve thumbnails for in-browser fetch
Add-Type -AssemblyName "System.Net.HttpListener"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8765/")
$listener.Start()
Write-Host "Serving thumbnails at http://127.0.0.1:8765/  (Ctrl+C to stop)"

$root = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $req = $context.Request
        $resp = $context.Response

        $resp.AddHeader("Access-Control-Allow-Origin", "*")
        $resp.AddHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
        $resp.AddHeader("Access-Control-Allow-Headers", "*")

        if ($req.HttpMethod -eq "OPTIONS") {
            $resp.StatusCode = 204
            $resp.OutputStream.Close()
            continue
        }

        $name = $req.Url.LocalPath.TrimStart("/")
        $path = Join-Path $root $name
        if ((Test-Path $path) -and $name -match '^product[1-8]\.png$') {
            $bytes = [IO.File]::ReadAllBytes($path)
            $resp.ContentType = "image/png"
            $resp.ContentLength64 = $bytes.Length
            $resp.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $resp.StatusCode = 404
        }
        $resp.OutputStream.Close()
    } catch {
        Write-Host "err: $_"
    }
}
