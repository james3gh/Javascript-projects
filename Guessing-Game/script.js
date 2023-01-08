// variables
let gameArea = document.getElementById("game-grid");
let color_pick = document.getElementById("color-pick");
let box = Array.from(document.getElementsByClassName("box"));
let header = document.getElementById("header");
let gameStatus = document.getElementById("status");
let matchcolor = Math.floor(Math.random() * 6);

// initial setting of the game
function initialConf(size) {
  matchcolor = Math.floor(Math.random() * size);
  gameStatus.innerHTML = "";
  header.style.backgroundColor = "rgba(255, 230, 0, 0.795)";
  document.getElementById("easy").style.pointerEvents = "auto";
  document.getElementById("hard").style.pointerEvents = "auto";
  gameArea.innerHTML = "";
  for (var i = 1; i <= size; ++i) {
    let node = document.createElement("div");
    node.className = "box";
    gameArea.appendChild(node);
  }
  AssignColors(matchcolor);
  WinOrLose();
}

// generates random rgb color to the tiles
randomColorGenerator = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  let color = "rgb(" + x + ", " + y + ", " + z + ")";
  return color;
};

// rgb color for heading
let rgbHeading = randomColorGenerator();
color_pick.innerHTML = rgbHeading;

AssignColors(matchcolor);
WinOrLose();

// give colors to the boxes
function AssignColors(matchcolor) {
  box = Array.from(document.getElementsByClassName("box"));
  rgbHeading = color_pick.innerHTML;
  box.forEach(function (element, index) {
    rgb = randomColorGenerator();
    if (index == matchcolor) {
      element.style.backgroundColor = rgbHeading;
    } else {
      element.style.backgroundColor = rgb;
    }
  });
}

// idea for user to lose or win the game
function WinOrLose() {
  box = Array.from(document.getElementsByClassName("box"));
  box.forEach(function (element, index) {
    element.addEventListener("click", (e) => {
      document.getElementById("easy").style.pointerEvents = "none";
      document.getElementById("hard").style.pointerEvents = "none";
      clickedColor = e.currentTarget.style.backgroundColor;
      if (clickedColor == rgbHeading) {
        gameStatus.innerHTML = "Congrats you win !!!";
        box.forEach(function (ele, ind) {
          ele.style.visibility = "visible";
          ele.style.backgroundColor = rgbHeading;
        });
        header.style.backgroundColor = rgbHeading;
      } else {
        gameStatus.innerHTML = "Try Again";
        e.currentTarget.style.visibility = "hidden";
      }
    });
  });
}

function newGame() {
  location.reload();
}
