const arrayBici = [
    {
        nome: 'Bici da corsa rossa',
        peso: 50
    },
    {
        nome: 'Bici da corsa blu',
        peso: 35
    },
    {
        nome: 'Bici da corsa gialla',
        peso: 20
    },
    {
        nome: 'Bici da corsa verde',
        peso: 40
    }
];

console.log(arrayBici);

arrayBici.forEach( Element =>{

    const {nome, peso} = Element;
    console.log(nome,peso)

})
