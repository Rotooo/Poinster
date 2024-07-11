const { unique } = require('../modules/module');

class Poinster{
  constructor(Onquer = [], Desty = []){
    this.Onquer = Onquer;
    this.Desty = Desty;
  }

  makeOnquer(data){
    if(data == '' || data == null){
      for (let i = 0; i < 16; i++) {
        let num = Math.floor(Math.random() * 8);
        this.Onquer.push(num);
      }
      return this.Onquer;
    } else {
      let onquerKey = data.toString().split('').map(Number);
      return onquerKey;
    }
  }

  makeDesty(data){
    if(data == '' || data == null){  
      for (let i = 0; i < this.Onquer.length; i += 2) {
        let par = parseInt('' + this.Onquer[i] + this.Onquer[i + 1]);
        this.Desty.push(par);
      }
      return this.Desty;
    } else {
      let destyKey = [];

      for (let i = 0; i < data.length; i += 2) {
        destyKey.push(data.substr(i, 2));
      }
      return destyKey;
    }
  }

  totalDesty(data){
    if(data == '' || data == null){  
      let destyKey = this.Desty.reduce((ac, vA) => ac + vA, 0);
      return destyKey;
    } else {
      let destyKey = data.reduce((ac, vA) => ac + vA, 0);
      return destyKey;
    }
  }

  totalOnquer(data){
    if(data == '' || data == null){
    let onquerKey = this.Onquer.reduce((ac, vA) => ac + vA, 0);
    return onquerKey;
    } else {
      let onquerKey = data.reduce((ac, vA) => ac + vA, 0);
      return onquerKey;
    }
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
        decrypted += pair;
      }
    }
    return decrypted;
  }

  onquerToText(data){
    let onquerText = '';
    for(let i = 0; i < data.length; i++) {
      for(let j = 0; j < unique.length; j++) {
          if(data[i] === unique[j].key) {
              onquerText += unique[j].value;
              break;
          }
      }
    }
    return onquerText;
  }
}

module.exports = Poinster;