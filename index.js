// Remember to import the data and Dog class!
import {Dog} from './Dog.js'
import {dogs} from './data.js'

const dogsArray = dogs.map(dog => {
  return new Dog(dog)
})

document.addEventListener('click', e => {
  const targetDog = dogsArray.find(dog => {
    return dog.name === e.target.dataset.like || dog.name === e.target.dataset.nope
  })
  if(e.target.dataset.like) {   
    targetDog.sethasBeenLikedtoTrue()
  } else if(e.target.dataset.nope) {
    targetDog.sethasBeenSwipedtoTrue()
  }
    reRender(targetDog)
    setTimeout(function () {
      render()
    }, 1000)
})

function render() {
  const targetProfile = dogsArray.find(dog => {
    return !dog.hasBeenSwiped
  })
  if (targetProfile) {
    document.querySelector('main').innerHTML = targetProfile.getProfileHTML()
  }
}

function reRender(data) {
  document.querySelector('main').innerHTML = data.getProfileHTML()
}

render()