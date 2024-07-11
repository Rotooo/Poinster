const Poinster = require('./logic/structure');

const p = new Poinster();

const cipher = p.encryptText('Hola Mundo');
const decrypt = p.decryptText('1619664312661932171925071925321266615661');

console.log(cipher);