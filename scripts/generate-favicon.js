const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const sizes = [16, 32, 48, 64, 128, 256, 512];
  const inputSvg = path.join(__dirname, '..', 'public', 'favicon.svg');
  
  // Ensure public directory exists
  if (!fs.existsSync(path.join(__dirname, '..', 'public'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'public'));
  }

  // Generate PNGs for different sizes
  for (const size of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '..', 'public', `favicon-${size}x${size}.png`));
    console.log(`Generated ${size}x${size} favicon`);
  }

  // Generate ICO file (using the 32x32 and 16x16 for ICO)
  // Note: You might need additional library for ICO generation
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);