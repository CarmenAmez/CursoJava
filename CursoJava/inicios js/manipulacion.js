let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const r = characters.filter(character => character.gender === 'female').map(character => character.name);
    console.log('getWomansName() → ', r);
}

const getSmallerPeople = () => {
    const r = characters.map(character => ({ ...character, height: character.height - 10 }));
    console.log('getSmallerPeople() → ', r);
}

const sumaDePeso = () => {
    const r = characters.reduce((acc, characters) => acc + Number(characters.mass), 0);
    console.log('sumaDePeso() → ' , r)
}

const mediaDeAltura = () => {
    const r = characters.reduce((acc, characters) => acc + Number(characters.height), 0) / characters.length;
    console.log('mediaDeAltura() → ', r)
}

const collactByIndex = (index) => {
    const selectedCharacter = characters[index];
    collectedCharacters.push(selectedCharacter);
    console.log('collactByIndex() → ', collectedCharacters)
}

const collectByName = (characterName) => {
    const selectedCharacter = characters.find(characters => characters.name === characterName);
    collectedCharacters.push(selectedCharacter);
    console.log('collectByName() → ', collectedCharacters);
}

const removeByName = (characterName) => {
    const r = collectedCharacters.filter(characters => characters.name !== characterName);
    console.log('removeByName() → ', r);
}

const getCharacterFilms = (characterName) =>{
    const r = characters.find(characters => characters.name === characterName);
    console.log('getCharacterFilms() → ', r.films)
}

const collectByName2 = (characterName) =>{
    const t = collectedCharacters2.find(characters => characters.name === characterName);
    if (t){
        t.amount++;
    } else{
        const selectedCharacter = collectedCharacters.find(characters => characters.name === characters);
        collectedCharacters2.push({...selectedCharacter, amount: 1});
    }
    console.log('collectByName2 () → ', t)
}

const mediaDeAltura2 = () =>{
    const r = collectedCharacters2.reduce((acc, characters) => acc + Number(characters.height), 0) / characters.length;
    console.log('mediaDeAltura2() → ',r);
}

const removeByName2 = (characterName) => {
    const r = collectedCharacters2.filter(characters => characters.name !== characterName);
    console.log('removeByName2() → ', r);
}



fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        getWomansName();
        getSmallerPeople();
        sumaDePeso();
        mediaDeAltura();
        collactByIndex('C-3PO');
        collectByName('C-3PO');
        removeByName('C-3PO');
        getCharacterFilms("Luke Skywalker");
        collectByName2('C-3PO');
        mediaDeAltura2();
        removeByName2();
    });