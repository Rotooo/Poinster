const { Lexicon1 } = require('./03342855');
const { Lexicon2 } = require('./03342856');
const { Lexicon3 } = require('./03342857');
const { Lexicon4 } = require('./03342858');
const { Lexicon5 } = require('./03342859');
const { Lexicon6 } = require('./03342860');
const { Lexicon7 } = require('./03342861');

var unique;
var day = new Date().getDay();

switch (day){
  case 0:
    unique = Lexicon6;
    break;
  case 1:
    unique = Lexicon4;
    break;
  case 2:
    unique = Lexicon5;
    break;
  case 3: 
    unique = Lexicon1;
    break;
  case 4:
    unique = Lexicon7;
    break;
  case 5:
    unique = Lexicon3;
    break;
  case 6:
    unique = Lexicon2;
    break;
}

module.exports = { unique };