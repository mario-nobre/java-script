let lista = []
let div = document.getElementById('res')

function adicionar() {
    let num = document.getElementById('num')
    let input = num.value
    let elemLista = lista.indexOf(input)

    if (elemLista == -1 && input != '' && input >= 1 && input <= 100 ) {
        lista.push(input)

        let select = document.getElementById('meuselect')
        let option = document.createElement('option')
        option.text = `Valor ${input} adicionado`
        select.appendChild(option)
    } else {
        alert('Valor inválido ou ja encontrado na lista')
    }

    num.value = "" // Limpa o valor do campo de entrada
    num.focus() // mantem o cursor no input logo depois de adicionar um numero
    div.innerHTML = ''
}

function analisar() { // operador spread (...)
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        for (let index in lista) {
            soma = soma + Number(lista[index])
        }
        let media = soma/lista.length

        div.innerHTML = `Ao todo temos ${lista.length} numeros cadastrados <br>
        o maior valor informado foi ${Math.max(...lista)} <br>
        o menor valor informado foi ${Math.min(...lista)} <br>
        somando todos os valores temos ${soma} <br>
        a media dos valores digitados é ${media}`
    }
}
