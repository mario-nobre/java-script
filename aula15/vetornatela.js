let valores = [8,1,7,4,2,9]

console.log(valores)

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

console.log('\n')
//outra forma

for (const pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

console.log('\n')

// buscar o indice de um valor dentro da lista
var busca = valores.indexOf(7)
var busca2 = valores.indexOf(3)
console.log(`O valor 7 está no indice ${busca}`)
console.log(`O valor 3 está no indice ${busca2}, ou seja, não pertence a lista`)
