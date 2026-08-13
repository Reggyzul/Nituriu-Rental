import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputFiles = [
  {
    src: `C:\\Users\\wcast\\.gemini\\antigravity-ide\\brain\\bef9e8bd-76a7-4674-aa3b-82f65b194296\\avanza_baru_1786617832243.png`,
    dest: `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru\\avanza.avif`
  },
  {
    src: `C:\\Users\\wcast\\.gemini\\antigravity-ide\\brain\\bef9e8bd-76a7-4674-aa3b-82f65b194296\\innova_baru_1786617847538.png`,
    dest: `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru\\innova.avif`
  },
  {
    src: `C:\\Users\\wcast\\.gemini\\antigravity-ide\\brain\\bef9e8bd-76a7-4674-aa3b-82f65b194296\\hiace_baru_1786617864546.png`,
    dest: `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru\\hiace.avif`
  }
];

const targetDir = `c:\\Users\\wcast\\Downloads\\Nituriu-Rental-main\\Nituriu-Rental-main\\public\\baru`;
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
  for (const item of inputFiles) {
    console.log(`Converting ${item.src} to ${item.dest}...`);
    await sharp(item.src)
      .avif({ quality: 80, effort: 4 })
      .toFile(item.dest);
    console.log(`Saved: ${item.dest}`);
  }
  console.log('All 3 car images converted to AVIF in public/baru!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
