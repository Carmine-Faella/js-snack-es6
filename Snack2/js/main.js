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


arrayCalcio.forEach( element => {

    element.punti = numberRandom(1,10);
    element.falli = numberRandom(1,10);

    console.log(element);

})

function numberRandom(min,max){

    const random = Math.floor(Math.random()* (max - min)) + min;

    return random

}

console.log(`Il numero random generato è: ${numberRandom(1,10)}`);

const newArrayCalcio = arrayCalcio.map((element)=>{
    const {nome, falli} = element

    console.log(`Il numero di falli è ${falli} della squadra: ${nome}`)
})