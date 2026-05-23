# Auto-commit and push when the agent finishes a turn (Cursor stop hook).
$ErrorActionPreference = "SilentlyContinue"
$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
Set-Location $root

$status = git status --porcelain 2>$null
if (-not $status) { exit 0 }

git add -A
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git -c user.name="Jiyoung An" -c user.email="jiyoungan@users.noreply.github.com" `
  commit -m "Auto-save: $timestamp"
git push origin HEAD 2>$null
if ($LASTEXITCODE -ne 0) { git push origin main 2>$null }

exit 0
