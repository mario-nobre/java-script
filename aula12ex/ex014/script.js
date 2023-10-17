function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 9
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora > 5 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background='#D0CAC2'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background="#FDBB89"
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background="#242B36"
    }
}