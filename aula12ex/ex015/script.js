function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (fano.length == 0 || fano > ano) {
        alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src','bebe h.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src','jovem h.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src','adulto h.jpg')
            } else {
                img.setAttribute('src','idoso h.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src','bebe m.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src','jovem m.jpg')
            } else if (idade <= 50) {
                img.setAttribute('src','adulto m.jpg')
            } else {
                img.setAttribute('src','idosa m.jpg')
            }
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`${genero} de ${idade} anos`
    res.appendChild(img)
}