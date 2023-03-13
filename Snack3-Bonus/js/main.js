
const array = ['Napoli', 'Milano', 'Roma', 'Genova']

function myFunction(a,b,Element){

    return Element.filter((element,index)=>{
        if( index>=a && index<=b){
            return true;
        }else{
            return false;
        }
    })
}

console.log(myFunction(1,3,array));

