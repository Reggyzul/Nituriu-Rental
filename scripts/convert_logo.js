import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const srcLogo = `C:\\Users\\wcast\\.gemini\\antigravity-ide\\brain\\bef9e8bd-76a7-4674-aa3b-82f65b194296\\logo_minimalist_raw_1786618008965.png`;
const destLogoAvif = `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru\\logo.avif`;
const destLogoPng = `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru\\logo.png`;

async function convertLogo() {
  console.log('Converting logo to AVIF and PNG...');
  
  // Save AVIF
  await sharp(srcLogo)
    .avif({ quality: 90, effort: 4 })
    .toFile(destLogoAvif);

  // Save PNG copy
  await sharp(srcLogo)
    .png()
    .toFile(destLogoPng);

  console.log('✅ Logo saved to public/baru/logo.avif and public/baru/logo.png');
}

convertLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
