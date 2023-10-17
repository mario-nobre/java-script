function contar() {
    let res = document.getElementById('res')
    let input1 = document.getElementById('num1').value
    let input2 = document.getElementById('num2').value
    let input3 = document.getElementById('pass').value

    let num1 = Number(input1)
    let num2 = Number(input2)
    let passo = Number(input3)

    if (input1 == '' || input2 == '' || num2 < num1) {
        res.innerHTML=`Impossível contar!`
    } else if (passo == 0) {
        passo = 1
        alert('passo inválido. considerando passo = 1')

        res.innerHTML=`Contando: <br>`
        for (let index = num1; index <= num2; index += passo) {
            res.innerHTML += `${index} \uD83D\uDC49`
        }
        res.append(`\uD83C\uDFF4`)

    } else {
        res.innerHTML=`Contando: <br>`
        for (let index = 1; num1 <= num2; index++) {
            res.append(`${num1} \uD83D\uDC49`)
            num1 += passo
        }
        res.append(`\uD83C\uDFF4`)
    }
}