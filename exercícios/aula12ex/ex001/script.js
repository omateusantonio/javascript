function carregar() {
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = 'orange'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'rgb(' + 14 + ',' + 14 + ',' + 63 + ')'
    }
}