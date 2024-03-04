const costeHotel = (n) => n * 140;

const costeAvion = (town,n) =>{
    let coste;
    if (town === 'Oviedo'){
        coste = 15;
    } else if ( town === 'Barcelona' && town === 'Madrid'){
        coste = 90;
    } else if (town === 'Tokio'){
        coste = 700;
    }

    if (n > 3){
        coste *=0.9;
    }

    return coste;
}

const costeAlquilerCoche = (n) => {
    let coste = n * 40;
    if (n >= 7){
        coste -= 50;
    } else if (n >= 3){
        coste -= 20;
    }

    return coste;
}

const numNoches = prompt('numero de noches');
const destino = prompt('destino');
const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino, numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);  