/*1.Escribe un objeto llamado miPerro que tenga las siguientes propiedades:
piernas, colas, amigos. Dale valor a estas propiedades y haz tres console.log(),
uno por cada una de las tres propiedades.*/
const myDog = {
    legs: 4,
    friends: 5,
    tail: 1,
}

console.log(myDog.legs);
console.log(myDog.friends);
console.log(myDog.tail);

/**2.La constante ojos debe valer la propiedad ojos del objeto testObj.
*Además, la constante nombre debe valer la propiedad nombre del objeto testObj. */
const obj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};
// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = obj.ojos;      // Cambiar esta línea
const nombre = obj.nombre;    // Cambia esta línea
console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

/*3.Utilizar la constante playerNumber para acceder a la propiedad 
correspondiente del objeto testObj. */
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 19;
const player = testObj[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

/**4.Accede a la propiedad nombre para cambiar su valor de Coder a HappyCoder. */
const dog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

dog.nombre = 'HappyCoder'

// Modifica esta línea con el código necesario
console.log(dog.nombre); // Debería mostrar: "HappyCoder"

/**5.Convierte el bloque switch-case en un objeto llamado lookup. */
function phoneticLookup(val) {
    let result = "";
    // Sólo cambia el código por debajo de esta línea
    const lookup = {
        'alpha':'Adams',
        'bravo':'Boston',
        'charlie':'Chicago',
        'delta':'Denver',
        'echo':'Easy',
        'foxtrot':'Frank'
    }
    result = lookup[val];
    // Sólo cambia el código por encima de esta línea
    return result;
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

/**6.Añade un nuevo album al array myMusic. Deberá tener las mismas propiedades,
*pero con valores diferentes que el primer objeto del array.
Después, añadir un console.log para mostrar el valor del nombre del artista y
otro console.log para mostrar el valor del primer elemento del array de formatos 
del album recien añadido. */
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Fall Out Boy",
        "titulo": "Folie à Deux",
        "formatos": [
            "CD",
            "LP",
            "8T"
        ],
        "premios": true
    }
];

console.log(myMusic[0].artista);
console.log(myMusic[1].formatos[0]);

/*Asigna a la constante gloveBoxContents el valor de la propiedad glob box.*/
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
console.log(gloveBoxContents); // Debería valer: "maps"

/**8.Asigna a la constante secondTree el valor de la propiedad list del 
segundo objeto del array myPlants. */
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list ;
console.log(secondTree); // Debería mostrar:["fir", "pine", "birch"]
