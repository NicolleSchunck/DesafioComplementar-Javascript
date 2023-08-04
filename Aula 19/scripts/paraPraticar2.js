
let num1 = 7
let num2 = 10

function subtrair (num1,num2){
    let resultado = num1 - num2
    if (num1 < num2) {
        console.log('Nao foi possivel subtrair')
    } else {
        return resultado
    }
}

function dividir (num1,num2){
    let resultado = num1 / num2
    if (num2 < 0) {
        console.log('Nao foi possivel dividir')
    } else {
        return resultado
    }
}

console.log(subtrair (num1,num2))
console.log(subtrair (20,10))

console.log(dividir (20,10))
console.log(dividir (20,-1))