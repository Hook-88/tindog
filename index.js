// Remember to import the data and Dog class!
import {Dog} from './Dog.js'
import {dogs} from './data.js'

const rex = new Dog(dogs[0])

document.querySelector('main').innerHTML = rex.getProfileHTML()