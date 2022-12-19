let stringVoy = "Je vais manger a la cantine"

function noVoy (string)
{
let arrayVoy =['a','i','e','y','u','o']
let arrayShiftVoy =['A','I','E','Y','U','O']

 for (let index = 0; index < arrayVoy.length; index++) {
    string = string.replaceAll(arrayVoy[index],arrayShiftVoy[index]) ;
    
     
 }
 return string;
}
 console.log(noVoy(stringVoy));
