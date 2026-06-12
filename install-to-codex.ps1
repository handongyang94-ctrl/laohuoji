$ErrorActionPreference = "Stop"

$source = Join-Path $PSScriptRoot "skills\koubo-video-editor"
$target = Join-Path $env:USERPROFILE ".codex\skills\koubo-video-editor"

if (!(Test-Path -LiteralPath $source)) {
  throw "找不到 Skill 源目录：$source"
}

New-Item -ItemType Directory -Force -Path (Split-Path -Parent $target) | Out-Null
if (Test-Path -LiteralPath $target) {
  Remove-Item -LiteralPath $target -Recurse -Force
}

Copy-Item -LiteralPath $source -Destination $target -Recurse -Force
Write-Host "安装完成：$target"
Write-Host "重启 Codex 后即可使用 koubo-video-editor。"

