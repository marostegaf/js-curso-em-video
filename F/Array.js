let carros = [2]
carros[0] = "Meca"
carros[1] = "BMW"
carros.push("Porsche")
console.log(`Nossa garagem tem ${carros.length} carros`)
//carros.sort()
console.log(carros[5])

/*for (let i = 0; i < carros.length; i++) {
    console.log(`${i + 1} - ${carros[i]}`)
}*/

for(var carro in carros) {
    console.log(carros[carro])
}

console.log(carros.indexOf(2))
