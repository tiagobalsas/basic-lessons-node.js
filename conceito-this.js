console.log(global === this); // false
console.log(module === this); // false
console.log(module.exports === this); // true

this.estouVisivel = function () {
  console.log('Estou visível e acessível!');
};
