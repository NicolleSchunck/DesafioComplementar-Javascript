//array de objetos

const frutas = [
    {
        nome: 'Morango',
        cor: 'vermelha',
        peso: '30g',
        tipo: 'Fruta'
    },
    {
        nome: 'Banana',
        cor: 'amarela',
        peso: '80g',
        tipo: 'Fruta'
    },
    {
        nome: 'Pera',
        cor: 'verde',
        peso: '100g',
        tipo: 'Fruta'
    },
    {
        nome: 'Laranja',
        cor: 'laranja',
        peso: '150g',
        tipo: 'Fruta'
    }

]
/*
console.log(frutas)
console.log(frutas[2].nome)*/

frutas.forEach((fruit) =>{
    console.log(fruit.nome)
})

/*
function

const soma = (frutas.tipo) => {
    console.log(soma)
}*/

console.log(frutas)