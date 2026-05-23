# One-time setup: enable auto-push after each git commit.
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root
git config core.hooksPath .githooks
Write-Host "Git hooks installed. Commits will auto-push to origin."
