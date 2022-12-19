let stringVoy = "Je vais manger a la cantine"

function nbVoy (string)
{
let arrayVoy =['a','i','e','y','u','o']
let x = 0 ; 

 for (let index = 0; index < string.length; index++)


  {
    
    for(let i = 0; i < arrayVoy.length; i++)
    {
    if (string[index] === arrayVoy[i])
    {
        x = x+1 ;
    }

    }
    
     
 }
 return x;
}
 console.log(nbVoy(stringVoy));
