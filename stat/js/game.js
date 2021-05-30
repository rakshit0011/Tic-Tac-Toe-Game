let imgs = document.querySelectorAll(".image");
const x = "./images/x.jpg";
const o = "./images/o.jpg";
// x is represented by 1 and o is represented by 0
// x starts the game(the click on a block with id as odd number will result in setting
// image as x else the image will be set as o)

// Set the usernames
const player1 = sessionStorage.getItem("Player1");
const player2 = sessionStorage.getItem("Player2");
let flag = 0;
document.getElementById("player1").innerText = player1;
document.getElementById("player2").innerText = player2;
// Add functioning to the exit button
document.getElementById("exit").addEventListener("click", () => {
  window.open("./login.html", "_self");
});
// Variables to count the scores of players in one session
var score_x = 0;
var score_o = 0;
// To find if the game has drawn
function findDraw(){
  let sum=0;
  for(let i=1;i<10;i++){
    sum+=arr[i];
  }
  return sum;
}
// Variable to display x or o depending on the turns
var turns = 1;
// xwins=1 if x wins the game and owins =1 if o wins the game
var xwins = 0;
var owins = 0;
// To disable image change on clicking multiple times, we will use this array.
// When a block is clicked, the values of the array will be updated
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var winPosx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var winPos0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
imgs.forEach(function (e1) {
  e1.addEventListener("click", (e) => {
    let clickedN = e.target.id;
    let setIm = e.target;
    if (turns % 2 != 0 && arr[clickedN] == 0 && xwins == 0 && owins == 0) {
      setIm.setAttribute("src", x);
      winPosx[clickedN]++;
    } else if (
      turns % 2 == 0 &&
      arr[clickedN] == 0 &&
      xwins == 0 &&
      owins == 0
    ) {
      setIm.setAttribute("src", o);
      winPos0[clickedN]++;
    }
    arr[clickedN]++;

    // This condition is to remove the error of updating values upon multiple
    // clicks on the same element
    if (arr[clickedN] == 1) {
      turns++;
    }

    if (
      (winPosx[1] > 0 && winPosx[2] > 0 && winPosx[3] > 0) ||
      (winPosx[4] > 0 && winPosx[5] > 0 && winPosx[6] > 0) ||
      (winPosx[7] > 0 && winPosx[8] > 0 && winPosx[9] > 0) ||
      (winPosx[1] > 0 && winPosx[4] > 0 && winPosx[7] > 0) ||
      (winPosx[2] > 0 && winPosx[5] > 0 && winPosx[8] > 0) ||
      (winPosx[3] > 0 && winPosx[6] > 0 && winPosx[9] > 0) ||
      (winPosx[1] > 0 && winPosx[5] > 0 && winPosx[9] > 0) ||
      (winPosx[3] > 0 && winPosx[5] > 0 && winPosx[7] > 0)
    ) {
      xwins = 1;
      if (flag === 0) {
        score_x++;
      }
      flag = 1;
      document.getElementById("score1").innerText = score_x;
    }

    if (
      (winPos0[1] > 0 && winPos0[2] > 0 && winPos0[3] > 0) ||
      (winPos0[4] > 0 && winPos0[5] > 0 && winPos0[6] > 0) ||
      (winPos0[7] > 0 && winPos0[8] > 0 && winPos0[9] > 0) ||
      (winPos0[1] > 0 && winPos0[4] > 0 && winPos0[7] > 0) ||
      (winPos0[2] > 0 && winPos0[5] > 0 && winPos0[8] > 0) ||
      (winPos0[3] > 0 && winPos0[6] > 0 && winPos0[9] > 0) ||
      (winPos0[1] > 0 && winPos0[5] > 0 && winPos0[9] > 0) ||
      (winPos0[3] > 0 && winPos0[5] > 0 && winPos0[7] > 0)
    ) {
      owins = 1;
      if (flag === 0) {
        score_o++;
      }
      flag = 1;
      document.getElementById("score2").innerText = score_o;
    }
    if (xwins == 1) {
      document.querySelector("h1").innerHTML = `${player1} won the game`;
    } else if (owins == 1) {
      document.querySelector("h1").innerHTML = `${player2} won the game`;
    }
  let sum1 = findDraw();
  if(sum1==9&&xwins==0&&owins==0){
    document.querySelector("h1").innerHTML = "Game Drawn!"
  }    
  });
});

// The reset button

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  winPosx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  winPos0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  xwins = 0;
  owins = 0;
  turns = 1;
  flag = 0;
  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.querySelector("h1").innerHTML = "Tic-Tac-Toe";
  imgs.forEach(function (e1) {
    e1.setAttribute("src", " ");
  });
});
