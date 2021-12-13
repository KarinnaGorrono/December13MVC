//NOTE This file spins up an app and loads all the controllers

import { AnimalController } from "./Controller/AnimalController.js"

console.log("main")

const animalController = new AnimalController()

window['animalController'] = animalController