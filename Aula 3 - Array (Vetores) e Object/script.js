// Criado por Hannah Lisie

// o que sao vetores ou arrays

// como declarar um array

/* let array = ['String', 1, true];
console.log(array); */

// pode guardar varios tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array); // Original
console.log(array[0]); // Vai imprimir apenas o que estou pedindo
console.log(array[3]);*/

/* isso serve para desligar um codigo */

// para os arrays abaixo funcionarem o let tem que estar ativo e a impressão é feita no proprio array

/* let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]; */

/* //forEach - intera um array;
array.forEach(function(item, index){console.log(item,index)}); */

/* //Push - add item no final do array;
array.push('novo item');
console.log(array); */

/* //Pop - remove item no final do array;
array.Pop();
console.log(array); */

/* //Shift - remove item no inicio do array;
array.Shift();
console.log(array); */

/* //Unshift - add item no inicio do array;
array.Unshift('novo item no inicio');
console.log(array); */

/* //IndexOF . retorna o indice de um valor;
console.log(array.indexof (true)); */

/* //Splice - remove ou substitui um intem pelo indice;
array.Splice(0, 3);
console.log(array); */

/* //Slice - retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray); */

// Todo objeto deve ser declarado entre chaves {}
/* var xicara = {
        cor: 'azul',
        tamanho: 'p',
        funcao: tomarCafe()
    } */

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object);

/* console.log(object.boolean); // como acessar outro valor */

// Isso é uma forma de fazer desestruturação;

/* var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

// Essa é outra forma de desestruturação;

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);