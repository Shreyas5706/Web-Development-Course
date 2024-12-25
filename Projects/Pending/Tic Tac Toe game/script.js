alert("Welcome to Tic Tac Toe Game");
let music = new Audio("music.mp3")
let aturn = new Audio("ting.mp3")
let game_over = new Audio("gameover.mp3")

let turn = "X"

let gameover=false;
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {
    let bts = element.getElementsByClassName('boxtext')[0];
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],    

    ];

    wins.forEach(e=>{
            if((bts[e[0]].innerText === bts[e[1]].innerText) && (bts[e[2]].innerText === bts[e[1]].innerText) && (bts[e[0]].innerText !== "") ){
                document.getElementsByClassName('info')[0].innerText=bts[e[0]].innerText + "won";
                gameover=true;
            }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let bt = element.getElementsByClassName('boxtext')[0];
    element.addEventListener('click', () => { 
        if (bt.innerText === '') {
            bt.innerText = turn; 
            turn = changeturn();
            aturn.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
        }
    })
})