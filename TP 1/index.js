console.log("Hello World");

//Test commentaire

/*Commentaire
multiligne
*/

var test = 0;

let test2 = 2;



function square (number)
{
    return number * number;
}

//console.log(square (5));

let array = [5,6564,45,4645,54,54,545,45488]



/*
@param {*} arrayNumber : an array of number
*/

function greaterThan (arrayNumber)
{
    let a = arrayNumber[0]; // a variable initialiser pour stocker une valeur
    for (let index = 0; index < arrayNumber.length; index++) {
        if (arrayNumber[index] > a) {
            a = arrayNumber[index];
        }
        
    }
    return a

}

console.log(greaterThan(array)) ;

