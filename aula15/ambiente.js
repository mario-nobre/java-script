let num = [5,8,4]
num[3] = 6 // acrescenta um valor no indice 3
num.push(11) // acrescenta um valor no final da lista
console.log(num[0]);
console.log(num[3]);
console.log(`nosso vetor é o ${num} e tem tamanho ${num.length}`)
var ultimoElemento = num[num.length - 1]; // ultimo elemento
console.log(`O último elemento do vetor é: ${ultimoElemento}`)
console.log(`A lista ordenada é: ${num.sort((a,b)=>a-b)}`)

// crescente
num.sort(function(a, b) {
    return a - b;
});

console.log(num);

// decrescente
num.sort(function(a, b) {
    return b - a;
});

console.log(num);

// outra forma

num.sort((a,b) => a - b)
console.log(num);

num.sort((a,b) => b - a)
console.log(num);
