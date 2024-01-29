function parimp(num) {
    if (num % 2 == 0) {
        return "par"

    } else {
        return "ímpar"

    }
}

function soma(n1 = 0, n2 = 0) {
    return n1 + n2

}

let v = function(x) {
    return x * x

}

/*function fatorial(num) {
    let fat = 1
    for(let c = num; c >= 1; c--) {
        fat *= c
        if (c == 1) {
            process.stdout.write(`1 = `)
            break
        }
        process.stdout.write(`${c} x `)
    }
    return fat
}
*/

//CHAMADA RECURSIVA
function fatorial(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(soma(8, 2))
console.log(v(5))   
console.log(fatorial(5))