$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$jobs = @(
    @{ src = ".\product1\*"; out = ".\AI-Content-Automation-Kit.zip" },
    @{ src = ".\product2\*"; out = ".\Micro-SaaS-API-Blueprint.zip" },
    @{ src = ".\product3\*"; out = ".\SMB-Dashboard-Starter-Kit.zip" },
    @{ src = ".\product4\client-portal"; out = ".\Client-Portal-HTML-Template.zip" },
    @{ src = ".\product5\*"; out = ".\FinOps-Audit-Savings-Kit.zip" },
    @{ src = ".\product6\*"; out = ".\Relay-AI-Document-CRM-Landing.zip" },
    @{ src = ".\product7\*"; out = ".\Console-Kit-AI-API-Dashboard.zip" },
    @{ src = ".\product8\*"; out = ".\Meridian-BI-Dashboard.zip" }
)

foreach ($j in $jobs) {
    Compress-Archive -Path $j.src -DestinationPath $j.out -Force
}

Get-ChildItem *.zip | Select-Object Name, @{N='KB'; E={ [math]::Round($_.Length / 1KB, 1) }} | Format-Table -AutoSize
