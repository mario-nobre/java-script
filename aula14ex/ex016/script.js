function contar() {
    var text = document.getElementById('contando')
    var input1 = document.getElementById('num1').value
    var input2 = document.getElementById('num2').value
    var input3 = document.getElementById('pass').value

    var num1 = Number(input1)
    var num2 = Number(input2)
    var passo = Number(input3)

    if (input1 == '' || input2 == '' || num2 < num1) {
        text.innerHTML=`Impossível contar!`
    } else if (passo == 0) {
        passo = 1
        alert('passo inválido. considerando passo = 1')

        text.innerHTML=`Contando: <br>`
        for (let index = 1; num1 <= num2; index++) {
            text.append(`${num1} \uD83D\uDC49`)
            num1 += passo
        }
        text.append(`\uD83C\uDFF4`)

    } else {
        text.innerHTML=`Contando: <br>`
        for (let index = 1; num1 <= num2; index++) {
            text.append(`${num1} \uD83D\uDC49`)
            num1 += passo
        }
        text.append(`\uD83C\uDFF4`)
    }
}