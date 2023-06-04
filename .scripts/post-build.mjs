import { readFileSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filenames = ['vue-ui.es.js', 'vue-ui.es.min.js', 'vue-ui.umd.js'];

filenames.forEach((filename) => {
  const filepath = path.resolve(__dirname, '..', 'dist', filename);
  const stats = statSync(filepath);
  const sizeInKb = stats.size / 1024;
  const gzipSizeInKb = getGzipSize(filepath) / 1024;
  console.log(`${filename}: ${sizeInKb.toFixed(2)} KB (gzip: ${gzipSizeInKb.toFixed(2)} KB)`);
});

function getGzipSize(filepath) {
  const fileContent = readFileSync(filepath);
  const gzippedContent = gzipSync(fileContent);
  return gzippedContent.length;
}
