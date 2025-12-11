# PowerShell script to build Angular project and deploy to GitHub Pages

Write-Host "✅ Starting Angular production build..."
ng build -c production

# Check if browser folder exists
$buildFolder = "dist/portfolio/browser"
if (-Not (Test-Path $buildFolder)) {
    Write-Error "❌ Build folder not found: $buildFolder"
    exit
}

# Create 404.html from index.html (for SPA routing)
$indexFile = Join-Path $buildFolder "index.html"
$notFoundFile = Join-Path $buildFolder "404.html"

if (Test-Path $indexFile) {
    Copy-Item $indexFile $notFoundFile -Force
    Write-Host "✅ 404.html created from index.html"
} else {
    Write-Warning "⚠️ index.html not found, skipping 404.html creation"
}

# Deploy using angular-cli-ghpages
Write-Host "🚀 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=$buildFolder

Write-Host "🌟 Deployment finished! Your site should be live at https://Waseemahmed120.github.io/My_Portfolio/"
