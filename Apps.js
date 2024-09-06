let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgameBtn =document.querySelector("#newGame");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turn0 = true;
//playX, playO
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame =() =>{
    turn0 = true;
    enabledBtn();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            //playerO
            box.innerText = "O";
            turn0 = false;
        } else {
            //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBtn = ()=>{
    for (box of boxes){
        box.disabled =true;
    }
};
const enabledBtn = ()=>{
    for (box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};
const showWinner = (winner) =>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val ==pos2Val &&pos2Val ===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}
newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);