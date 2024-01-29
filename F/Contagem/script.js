var num = document.getElementById("txtnum")
var lista = document.getElementById("nums")
var res = document.getElementById("res")
var numsarray = []

function inLista(n, l) {
    for (var i = 0; i < l.length; i++) {
        if (l[i] === n) {
            return true;
        }
    }
    return false;
}

function adicionar() {
    res.innerHTML = ""
    if (num.value.length != 0 && !inLista(Number(num.value), numsarray)) {
        numsarray.push(Number(num.value))
        lista.innerHTML += `${num.value} foi adicionado com sucesso!<br>`
    } else {
        window.alert("Digite um valor válido!")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (numsarray.length == 0) {
        alert("Digite algum valor")
    } else {
        var cont = numsarray.length
        var total = 0
        for (var valor in numsarray) {
            total += numsarray[valor]
        }

        numsarray.sort()
        res.innerHTML += "\u{1F63A} = \u{1F63A} = \u{1F63A} = \u{1F63A} = \u{1F63A}<br>"
        res.innerHTML += `Ao todo temos ${cont} números cadastrados<br>`
        res.innerHTML += `O maior valor informado foi ${numsarray[cont -1]}<br>`
        res.innerHTML += `O menor valor informado foi ${numsarray[0]}<br>`
        res.innerHTML += `Somando todos os valores temos ${total}<br>`
        res.innerHTML += `A média dos valores é ${total/cont}<br>`
        }
}
