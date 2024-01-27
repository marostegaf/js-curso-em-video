function contar() {
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível Contar!"
        //alert("Digite dados válidos!")
        
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ) {
            res.innerHTML = "Passo Inválido!"
        } else if (i < f) {
            for(var c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        } else {
            for(var c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        

        res.innerHTML += "\u{1F63A}"
    }
    
} 