let stringCons = "Je vais manger a la cantine"

function consShift (string)
{
let arrayCons =['z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n']
let arrayShiftCons =['Z','R','T','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N']

 for (let index = 0; index < arrayCons.length; index++) {
    string = string.replaceAll(arrayCons[index],arrayShiftCons[index]) ;
    
     
 }
 return string;
}
 console.log(consShift(stringCons));