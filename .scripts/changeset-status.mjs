import { readdir } from 'fs';
import { extname } from 'path';

readdir('.changeset', (err, files) => {
  const result = files.filter((f) => extname(f).toLowerCase() === '.md').length - 1;
  console.log('Checking number of changes in changeset: ', result);
  process.exit(result > 0 ? 0 : 1);
});
