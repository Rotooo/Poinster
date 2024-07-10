const Poinster = require('./logic/structure');

const p = new Poinster();
const message = 'Hola Mundo';
const cifrar = p.encryptText(message);
const destyKey = p.makeDesty(cifrar);
const onquerKey = p.makeOnquer(cifrar);

console.log(`> Mensaje: ${message}`);
console.log(`> HASH: ${cifrar}`);
console.log(destyKey);
console.log(onquerKey);
console.log(p.totalOnquer(onquerKey));