//Definisco l'array di oggetti

const arrayCalcio = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    }
];

//Inserisco i numeri casuali

arrayCalcio.forEach( element => {

    element.punti = numberRandom(1,10);
    element.falli = numberRandom(1,10);

    console.log(element);

})

//Creo la funzione per la generazione dei numeri casuali

function numberRandom(min,max){

    const random = Math.floor(Math.random()* (max - min)) + min;

    return random

}

console.log(`Il numero random generato è: ${numberRandom(1,10)}`);

//Estrapolo il numero di falli e la squadra

const newArrayCalcio = arrayCalcio.map((element)=>{
    const {nome, falli} = element

    console.log(`Il numero di falli è ${falli} della squadra: ${nome}`)
})