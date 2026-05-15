Set-Location $PSScriptRoot

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$template = (Resolve-Path "_template.html").Path
$templateUri = "file:///" + ($template -replace '\\', '/')

$products = 1..8

foreach ($n in $products) {
    $out = (Join-Path $PSScriptRoot "product$n.png")
    $url = "$templateUri" + "?p=p$n"
    Write-Host "Rendering product$n.png ..."
    if (Test-Path $out) { Remove-Item $out -Force }
    & $chrome --headless=new --disable-gpu --hide-scrollbars `
        --window-size=1280,720 `
        --screenshot=$out `
        --default-background-color=00000000 `
        $url *>&1 | Out-Null
    if (Test-Path $out) {
        $size = (Get-Item $out).Length
        Write-Host "  OK ($([math]::Round($size/1KB,1)) KB)"
    } else {
        Write-Host "  FAILED"
    }
}

Write-Host ""
Get-ChildItem product*.png | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
