//Definisco l'array di oggetti

const arrayBike = [
    {
        name: 'Bici da corsa rossa',
        weight: 50
    },
    {
        name: 'Bici da corsa blu',
        weight: 35
    },
    {
        name: 'Bici da corsa gialla',
        weight: 20
    },
    {
        name: 'Bici da corsa verde',
        weight: 40
    }
];

const result = document.getElementById('result');

//Estrapolo i pesi

let numberWeight = arrayBike.map(Element =>{

    return Element.weight
    
})

//Definisco il numero minore

const minNumber = Math.min(...numberWeight)

console.log(minNumber)

//Definisco la bici più leggera

arrayBike.forEach(element =>{

    const {name,weight} = element;
    console.log(`La ${name} pesa ${weight} kg`);

    if (weight == minNumber){
        result.innerHTML += (`La ${name} è quella che pesa meno, con un peso di ${weight} kg`)
    }
})











