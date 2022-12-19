let arrayNumber = [55, 40, 25, 100]


function compareNumbers(a, b) { //Permet de comparer deux nombres
    return b - a ; 
  }

function sort(arrayString)
{
    arrayNumber.sort(compareNumbers); //tri en utilisant la fonction compareNombres
    return arrayNumber

}

console.log(sort(arrayNumber))