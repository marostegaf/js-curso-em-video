function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "manha.jpg"
        document.body.style.background = "wheat"

    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.jpg"
        document.body.style.background = "#FFA864"

    } else {
        img.src = "noite.jpg"
        document.body.style.background = "#7D576F"

    }
}
    