let stringVoy = "Je vais manger a la cantine"

function noVoy (string) // Fonction qui permet de remplacer les voyelles minuscule en majuscule
{
let arrayVoy =['a','i','e','y','u','o'] // Tableau de voyelle miniscule
let arrayShiftVoy =['A','I','E','Y','U','O'] //tableau de voyelle majuscule

 for (let index = 0; index < arrayVoy.length; index++) {
    string = string.replaceAll(arrayVoy[index],arrayShiftVoy[index]) ; // Remplace les minuscules voyelle en majuscule voyelle en fonction de l'index
    
     
 }
 return string;
}
 console.log(noVoy(stringVoy));
