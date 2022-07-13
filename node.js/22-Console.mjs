/**
 * -- Console --
 * Console adalah standard library yang sudah sering kita gunakan secara global,
 * object console bisa kita gunakan tanpa harus melakukan import module.
 * Console melakukan print text-nya ke stdout.
 * Namun kita juga bisa membuat object Console sendiri jika kita mau, caranya dengan meng-import dari module "console"
 */

import { Console } from 'console';
import fs from 'fs';


const logFile = fs.createWriteStream('app.log');

const log = new Console({
  stdout: logFile,
  stderr: logFile
});

log.info('Info: Hello World!');
log.warn('Warning: Haha');
log.error('Error: Tes');
log.table({
  date: '2022-07-13',
  message: 'ilham'
});