
const array = ['Napoli', 'Milano', 'Roma', 'Genova']

array.forEach((Element, index) => {

    if(myFunction(1,3,index)){
        console.log(Element)
    }
})

function myFunction(a,b,Element){
    if( Element>=a && Element<=b){
        return Element
    }
}

