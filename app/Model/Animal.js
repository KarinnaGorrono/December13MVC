//NOTE an object that holds all the information for the data needed per object 

export class Animal {
    constructor(species, name, health) {
        this.species = species;
        this.name = name;
        this.health = health;

    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }

    printListItem() {
        return '<li onclick="AnimalController.species'
    }
}