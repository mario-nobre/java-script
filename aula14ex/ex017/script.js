
function gerar() {
    let num = document.getElementById('num').value
    if (num == '') {
        alert('Por favor, Digite um número!')
    } else {
        // Obtém uma referência ao elemento select
        var select = document.getElementById("meuSelect")

        select.innerHTML= '' // limpa o elemento 'select'

        for (let index = 1; index <= 10; index++) {
            let mult = num * index

            // Cria um novo elemento option
            let option = document.createElement('option')

            // Define o valor e texto do novo option
            option.text = num + ' X ' + index + ' = ' + mult

            // Adiciona o novo option ao select
            select.appendChild(option)
        }
    }
}
