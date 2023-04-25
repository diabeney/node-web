import { fileURLToPath } from 'url';
import { dirname } from 'path';
//Writing __filename, __dirname equivalents in esm

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
