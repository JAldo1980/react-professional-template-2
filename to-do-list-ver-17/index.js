// declare variables
const body = document.querySelector("body");
const addBtn = document.getElementById("add-btn");

// add event listener

addBtn.addEventListener("click", createObject);

// construct object

function ConstructObject(item, id, star) {
  this.item = item;
  this.id = id;
  this.star = star;
}

const newObjectArr = [];

// create object
function createObject() {
  getRandomId();
  let itemId = newId.join("");
  let item = document.getElementById("text-input").value;
  //   no input alert
  if (item === "") {
    alert("Please add Item");
    return;
  }
  let star = false;
  const newObject = new ConstructObject(item, itemId, star);
  newObjectArr.push(newObject);
  console.log(newObjectArr);
  renderObject();
}

// render object

const outputEl = document.querySelector(".output-el");
function renderObject() {
  outputEl.innerHTML = "";
  newObjectArr.forEach((item) => {
    outputEl.innerHTML += `
      <div id=${item.id} class="item-el">
        <p>${item.item}</p>
        <div class="star-icon">
        ${item.star ? "★" : "✩"}
       
            </div>
      </div>
      `;
  });
  clearInputValue();
  deleteItem();
  changeStarState();
}

// clear object values
function clearInputValue() {
  document.getElementById("text-input").value = "";
}

// delete object
function deleteItem() {
  const deleteOutputItem = document.querySelector(".output-el");
  deleteOutputItem.addEventListener("click", (e) => {
    let targetId = e.target.id;
    if (targetId) {
      let index = newObjectArr.findIndex((item) => item.id === targetId);
      if (index !== -1) {
        newObjectArr.splice(index, 1);
      }
      renderObject();
    }
  });
}

// dark mode
const lightEl = document.querySelector(".light-el");
lightEl.addEventListener("click", lightMode);

function lightMode() {
  if (lightEl.textContent === "🌙") {
    lightEl.textContent = "☀️";
    body.classList.toggle("dark");
  } else if (lightEl.textContent === "☀️") {
    lightEl.textContent = "🌙";
    body.classList.toggle("dark");
  }
}

// mark status - STARS
function changeStarState() {
  let starIcons = document.querySelectorAll(".star-icon");
  starIcons.forEach((starIcon) => {
    starIcon.addEventListener("click", (e) => {
      let starId = e.target.parentElement.id;
      let targetStar = newObjectArr.find((item) => item.id === starId);
      if (targetStar) {
        targetStar.star = !targetStar.star;
        starIcon.textContent = targetStar.star ? "★" : "✩";
      }
      renderObject();
    });
  });
}

// filter items
const filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", filterItems);

function filterItems() {
  console.log("click");
  const itemBoxes = document.querySelectorAll(".item-el");

  // Toggle the visibility of items based on their "star" property
  itemBoxes.forEach((itemBox) => {
    const itemId = itemBox.id;
    const item = newObjectArr.find((item) => item.id === itemId);

    if (item) {
      if (item.star === false) {
        itemBox.classList.toggle("hide"); // Toggle the "hide" class for non-starred items
      }
    }
  });
}

// Local storage

// create random ID
const randomChar = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "P",
  "M",
  "D",
  "R",
  "S",
  "!",
  "@",
  "£",
  "$",
  "%",
  "&",
  "+",
  "?",
];

let newId = [];

function getRandomId() {
  newId = [];
  for (let i = 1; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * randomChar.length);
    let randomId = randomChar[randomNumber];
    newId.push(randomId);
  }
}
