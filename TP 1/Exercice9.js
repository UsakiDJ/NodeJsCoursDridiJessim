let stringVoy = "Je vais manger a la cantine"

function nbVoy (string)
{
let arrayVoy =['a','i','e','y','u','o'] // Tableau de voyelle 
let x = 0 ; 

 for (let index = 0; index < string.length; index++) // Parcours le string sous la forme d'un tableau


  {
    
    for(let i = 0; i < arrayVoy.length; i++) //Double boucle pour tester le tableau de voyelle pour chaque caractère
    {
    if (string[index] === arrayVoy[i]) //si le caractère est = à celui du tableau de voyelle alors incrémenté +1 
    {
        x = x+1 ;
    }

    }
    
     
 }
 return x;
}
 console.log(nbVoy(stringVoy));
