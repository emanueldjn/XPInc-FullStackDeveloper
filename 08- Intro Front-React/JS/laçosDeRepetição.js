for(let i = 1; i < 10; i++) {
    if(i % 2 == 0){
        console.log(`${i} x 5 = ${i * 5}`);
    }
    
}

console.log('=========================')
let x = 1
while(x < 10) {
    console.log(`${x} x 5 = ${x * 5}`);
    x++;
}

console.log('=========================')
// Array - forEach() - Varre os dados e faz algo 
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valores.forEach((value) =>{
    console.log(`${value + 1} x 5 = ${value * 5}`);
})

console.log('=========================')
// Array - map() - o map ele varre os dados e retorna o valor e pode colocar dentro da variavel tbm
// utilizamos o 'map' quando queremos fazer alguma validação, manipular algum calculo  e retornar um novo valor a variavel 
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores2.map((value) => {
    return value * 5;
});
console.log(resultado);