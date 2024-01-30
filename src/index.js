import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiffTree from './buildDiffTree.js';
import format from './formatters/index.js';

const getAbsoluteFilePath = (fileName) => path.resolve(process.cwd(), fileName);
const readFileContent = (filePath) => fs.readFileSync(filePath, 'utf-8');

const ds = (file1) => {
  // const absoluteFile1Path = getAbsoluteFilePath(file1);

  // const file1Format = path.extname(absoluteFile1Path).substring(1);

  // const file1Content = readFileContent(absoluteFile1Path);

  return result;
};

export default ds;
