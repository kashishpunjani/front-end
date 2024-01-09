let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset-btn');
let newgame_btn = document.querySelector('#newgame-btn')
let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')

let turn0 = true;
const win_pattern =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];


const resetgame = ()=>{
    turn0 = true;
    enableboxes()
    msg_container.classList.add('hide');
}

boxes.forEach((box) =>{
    box.addEventListener('click' ,()=>{
        console.log('box was clicked');
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{     // to start new game 
    for (let box of boxes){
        box.disabled = false;
        box.innerText = '' ;  // to clear all 
    }
}

const showwinner = (winner) =>{
    msg.innerHTML = `Congratulation, Winner is ${winner}`
    msg_container.classList.remove('hide')
    disableboxes();
}

const checkwinner = ()=>{
    for (pattern of win_pattern){
        let pos1val =  boxes[pattern[0]].innerText;     // position 1 
        let pos2val =  boxes[pattern[1]].innerText;       // position 2
        let pos3val =  boxes[pattern[2]].innerText;       // position 3 
        if (pos1val != '' && pos2val != '' && pos3val != ''){
            if( pos1val === pos2val && pos2val === pos3val){
                console.log('winner' , pos1val)
                showwinner(pos1val);
            }
        }
    } 
}



newgame_btn.addEventListener('click' , resetgame)
reset_btn.addEventListener('click' , resetgame)
