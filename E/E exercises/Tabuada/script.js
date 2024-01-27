function tabuada() {
    var num = document.getElementById("txtnum")
    var tab = document.getElementById("seltab")
    var option = document.getElementById("option")

    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        var n = Number(num.value)
    }   

    tab.innerHTML = ""
    option.innerHTML = `Tabuada do ${n}`

    for (var c = 1; c <= 10; c++) {
        var item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        //item.value = `tab${c}`
        tab.appendChild(item)
    }
    tab.style.paddingTop = "10px";
    tab.style.paddingBottom = "10px";
    tab.style.paddingLeft = "5px"
}