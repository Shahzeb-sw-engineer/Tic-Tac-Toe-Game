
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let winnerbox = document.querySelector('.winnerbox')
let winnerMessage = document.querySelector('.message')
let newGame = document.querySelector('.New') 
let PlayerX = true;

WinningSession = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    PlayerX = true;
    EnableBoxes();
    winnerbox.classList.add("hide");
}

const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const EnableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (PlayerX) {
            box.style.color = "black";
            box.textContent = "X";
            PlayerX = false
        }
        else {
            box.textContent = "O";
            PlayerX = true
        }
        box.disabled = true;
        checkWinner();
    })
});

const Winner = (winner)=>{
    winnerMessage.textContent = ` 🏆 Congratulation Player ${winner}  Win 🏆 `;
   winnerbox.classList.remove("hide");
   disableBoxes();
}
const checkWinner = ()=> {
    for (let session of WinningSession) {
        let position1 = boxes[session[0]].innerText;
        let positon2 = boxes[session[1]].innerText;
        let position3 = boxes[session[2]].innerText;

        if (position1 != "" && positon2 != "" && position3 != "") {
            if (position1 === positon2 && positon2 === position3) {
               Winner(position1);

            }
        }
    }
}

reset.addEventListener("click" , resetGame);
newGame.addEventListener('click', resetGame)