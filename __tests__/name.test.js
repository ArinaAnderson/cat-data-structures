import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// import ds from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
