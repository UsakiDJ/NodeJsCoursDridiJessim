let stringVoy = "Je vais manger a la cantine"

function noVoy (string)
{
let arrayVoy =['a','i','e','y','u','o']

 for (let index = 0; index < arrayVoy.length; index++) {
    string = string.replaceAll(arrayVoy[index],'') ;
    
     
 }
 return string;
}
 console.log(noVoy(stringVoy));



