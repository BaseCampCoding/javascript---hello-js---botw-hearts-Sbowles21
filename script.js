const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");
const healButton = controlsContainer.querySelector("#heal-button");
const healAmountInput = controlsContainer.querySelector("#heal-amount-input");
const ahcButton = controlsContainer.querySelector("#add-heart-container-button");
const overhealButton = controlsContainer.querySelector("#overheal-button");
const overhealAmountInput = controlsContainer.querySelector("#overheal-amount-input");
let health = 35;
let maxHealth = 44;
let overHealth = 0

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0;
    }
  }
  quartersToFill = overHealth
  for (const YEET of heartsContainer.querySelectorAll(".heart.extra")){
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      YEET.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      YEET.dataset.quarters = 4;
    }
  }
}

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();
});

healButton.addEventListener("click", function() {
  let heal = Number(healAmountInput.value)*4;
  health = Math.min(maxHealth, health + heal);
  updateHeartsDisplay();
})

ahcButton.addEventListener("click", function(){
  const newHeart = heartsContainer.querySelector(".heart").cloneNode(true)
  maxHealth += 4
  heartsContainer.appendChild(newHeart)
  updateHeartsDisplay()
})

overhealButton.addEventListener("click", function () {
  health = maxHealth;
  overHealth =  Number(overhealAmountInput.value) * 4
  let overHealed = heartsContainer.querySelector(".heart").cloneNode(true);
  overHealed.classList.add("extra")
  for (let i = 0; i < Number(overhealAmountInput.value); i++ ){
    heartsContainer.appendChild(overHealed.cloneNode(true));
  }
  updateHeartsDisplay()
});