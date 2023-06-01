// Create the Dog class here
class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  getProfileHTML() {
    const {avatar, name, age, bio} = this
    return `
    <div class="profile-container">
      <img src="${avatar}" alt="Photo of ${name} the dog" class="profile-img" id="${name}">
      <img src="./images/badge-like.png" alt="Like badge" class="img-badge">
      <img src="./images/badge-nope.png" alt="Nope badge" class="img-badge" >
      <div class="profile-text">
        <h2>${name}, ${age}</h2>
        <h3>${bio}</h3>
      </div> 
    </div>

    <div class="btns-container">
      <button 
        class="dislike-btn" 
        data-nope="${name}"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>  

      <button 
        class="like-btn" 
          data-like="${name}"
      >
        <i class="fa-solid fa-heart"></i>
      </button>
    </div>
    `
  }
}

export {Dog}