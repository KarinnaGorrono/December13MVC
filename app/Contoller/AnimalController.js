//NOTE The controller takes user input and calls to the service the attempt to change data

import { Animal } from "../Model/Animal.js"

// BAD DONT DO THIS DATA BELONGS IN THE STATE 
const tempAnimal = [
    new Animal('Armadillo', 'Arnold', '0'),
    new Animal('Badger', 'Bob', '0'),
    new Animal('Chameleon', 'Charlie', '0'),
    new Animal('Dingo', 'Diego', '0'),
    new Animal('Eagle', "Earl", '0'),
    new Animal('Fox', 'Frank', '0'),
    new Animal('Giraffe', 'Gerald', '0'),
    new Animal('Hedgehog', 'Hank', '0'),
    new Animal('Iguana', 'Iris', '0'),
    new Animal('Jellyfish', 'Jolene', '0'),
    new Animal('Kangaroo', 'Kiwi', '0'),
    new Animal('Liger', 'Liam', '0'),
    new Animal('Meerkat', 'Miriam', '0'),
    new Animal('Newt', 'Neil', '0'),
    new Animal('Ostrich', 'Ollie', '0'),
    new Animal('Puma', 'Polly', '0'),
    new Animal('Quokka', 'Quill', '0'),
    new Animal('Raccoon', 'Randall', '0'),
    new Animal('Sloth', 'Stanley', '0'),
    new Animal('Turtle', "Tom", '0'),
    new Animal('Umbrellabird', 'Rihanna', '0'),
    new Animal('Vulture', 'Victor', '0'),
    new Animal('Weasel', 'Walter', '0'),
    new Animal('Xerus', 'Xavier', '0'),
    new Animal('Yak', 'Yas', '0'),
    new Animal('Zebra', 'Zabby', '0'),
]

function _drawZoo() {
    let template = ''
    tempAnimal.forEach(a => template += a.printListItem())
    document.getElementById('zoo').innerHTML = template
}

function hunger() {
    const animal = animals[animalKey]
}



export class AnimalController {
    constructor() {
        _drawZoo()
    }
}