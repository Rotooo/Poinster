const { unique } = require('../data/module');

class Poinster{
  constructor(Onquer = [], Desty = []){
    this.Onquer = Onquer;
    this.Desty = Desty;
  }

  getOnquerKey(){
    for (let i = 0; i < 16; i++) {
        let num = Math.floor(Math.random() * 8);
        this.Onquer.push(num);
    }
    return this.Onquer;
  }

  getDestyKey(){
    for (let i = 0; i < this.Onquer.length; i += 2) {
      let par = parseInt('' + this.Onquer[i] + this.Onquer[i + 1]);
      this.Desty.push(par);
    }
    return this.Desty;
  }

  calDestyKey(){
    let destyKey = this.Desty.reduce((ac, vA) => ac + vA, 0);
    return `Valor Desty: ${destyKey}`;
  }

  //Calcula el total de Onquer
  calOnquerKey(){
    let onquerKey = this.Onquer.reduce((ac, vA) => ac + vA, 0);
    console.log(`Valor Onquer: ${onquerKey}`);
  }

  encryptText(data){
    let encrypted = '';
    for(let char of data){
      let entry = unique.find(e => e.value === char);
      if(entry){
        encrypted += entry.key;
      } else {
        throw new Error(`Character "${char}" no exist`);
      }
    }
    return encrypted;
  }

  decryptText(data){
    const encryptMap = new Map();
    const decryptMap = new Map();

    unique.forEach(item => {
      encryptMap.set(item.key, item.value);
      decryptMap.set(item.value, item.key);
    });

    let decrypted = '';
    for (let i = 0; i < data.length; i += 2) {
      const pair = data.substring(i, i + 2);
      const decryptedChar = encryptMap.get(pair);
      if (decryptedChar) {
        decrypted += decryptedChar;
      } else {
        // Si el par no está en el diccionario, lo dejamos sin cambios
        decrypted += pair;
      }
    }
    return decrypted;
  }
}

module.exports = Poinster;