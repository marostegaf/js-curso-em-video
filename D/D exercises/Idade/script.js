function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value <= 0 || fano.value > ano) {
        window.alert("Ano incorreto!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var género = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        var verificarBtn = document.querySelector(".verificar");


        if(fsex[0].checked) {
            verificarBtn.style.borderColor = "rgb(104, 169, 245)"
            género = "Homem"
            res.style.color = "rgb(104, 169, 245)"
            document.body.style.backgroundColor = "rgb(104, 169, 245)"
            if (idade >= 0  && idade < 10) {
                img.setAttribute("src", "bebem.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "jovemm.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "adultom.jpg")
            } else {
                img.setAttribute("src", "idosom.jpg")
            }
        } else if (fsex[1].checked){
            verificarBtn.style.borderColor = "rgb(247, 110, 201)"
            género = "Mulher"
            document.body.style.backgroundColor = "rgb(247, 110, 201)"
            res.style.color = "rgb(247, 110, 201)"
            if (idade >= 0  && idade < 10) {
                img.setAttribute("src", "bebef.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "jovemf.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "adultof.jpg")
            } else {
                img.setAttribute("src", "idosof.jpg")
            }
        }
        res.innerHTML = `${género} com ${idade} anos`
        res.appendChild(img)
        res.style.textAlign = "center"
    }
}
