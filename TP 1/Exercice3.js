let stringVoy = "Je vais manger a la cantine"
/*
*
Retire les voyelles du texte donné
*
*/
function noVoy (string)
{
let arrayVoy =['a','i','e','y','u','o'] //tableau de voyelle 

 for (let index = 0; index < arrayVoy.length; index++) { // boucle qui parcours toute les voyelles
    string = string.replaceAll(arrayVoy[index],'') ; //Remplace une voyelle en fonction de l'index par du vide
    
     
 }
 return string;
}
 console.log(noVoy(stringVoy));



