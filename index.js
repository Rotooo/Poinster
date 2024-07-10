const Poinster = require('./logic/structure');

const p = new Poinster();
const text = p.encryptText('01234');
const deText = p.decryptText('5505253212431925');

console.log(deText);