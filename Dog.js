// Create the Dog class here
class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  getProfileHTML() {
    const {avatar, name, age, bio} = this
    return `
      <img src="${avatar}" alt="Photo of Teddy the dog" class="profile-img">
      <img src="./images/badge-like.png" alt="Like badge" class="img-badge">
      <img src="./images/badge-nope.png" alt="Nope badge" class="img-badge">
      <div class="profile-text">
          <h2>${name}, ${age}</h2>
          <h3>${bio}</h3>
      </div> 
    `
  }
}

export {Dog}