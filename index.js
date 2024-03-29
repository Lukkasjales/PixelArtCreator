let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseButton = document.getElementById("erase-button");
let paintButton = document.getElementById("paint-button");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
  mouse: {
    down: "mousedown", //inicio do click
    move: "mousemove", //arrastar o mouse
    up: "mouseup" //fim do click
  },
  touch: {
    down: "touchstart", 
    move: "touchmove", 
    up: "touchend" 
  }
}

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
  try {
    document.createEvent("touch"); //creates the touch event artifially
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
}

isTouchDevice();

gridButton.addEventListener("click", () => {
  container.innerHTML = "";
  let count = 0;

  for (i=0; i < gridHeight.value; i++){
    count +=2;
    let div = document.createEvent("div");
    div.classList.add("gridRow");

    for (j = 0; j<gridWidth.value; j++){
      count +=2;
      let col = document.createEvent("div");
      col.classList.add("gridCol");
      col.setAttribute("id", `gridCol${count}`);
      col.addEventListener(events[deviceType].down, () => {
        draw = true;
        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = colorButton.value;
        }
      });


    }
  }
});

clearGridButton.addEventListener("click", () => {
  container.innerHTML = "";
});

eraseButton.addEventListener("click", () => {
  erase = true;
})

paintButton.addEventListener("click", () => {
  erase = false;
})