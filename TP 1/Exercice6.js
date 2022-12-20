function arrayObject (object, propertieName){ //Prend un tableau d'objet avec différente propriétes et renvoie toute les valeurs de cette propriété
    let a = []
    for (let i = 0; i < object.length; i++) {
        a[i] = object[i][propertieName]

    }return a
}


const team = [{ //Tableau d'objet
    firstname: 'Eric',
    lastname: 'Duciel',

},
{
    firstname: 'Noire',
    lastname: 'Thana',

}];

console.log(arrayObject(team, 'firstname')) //Appel de la fonction arrayObject

