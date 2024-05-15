//Game Constants
let inputDir = {x:0,y:0};
// let direction = {x:0,y:0};
const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const music = new Audio("music/music.mp3");
let speed = 5;
let score = 0;
lastPaintTime = 0;
let snakeArr = [
    {x:13,y:15}
]

food = {x:6,y:8};
//gameFunction

function main(currentTime){
    window.requestAnimationFrame(main);
    if((currentTime-lastPaintTime)/1000 < 1 / speed){
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
    // console.log(currentTime);
}
function isCollide(snake){
    //bump into self
   
    for (let i = 1; i < snakeArr.length; index++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0].x >=18|| snake[0].x<=0 && snake[0].y >=18|| snake[0].y<=18){
        return true;
    }
}

function gameEngine(){
    //part1: Updating the snake Variable
    if(isCollide(snakeArr)){
        gameOverSound.play();
        music.pause();
        inputDir = {x:0,y:0};
        // alert('Press any key to Play Agai!n');
        snakeArr = [{x:13,y:15}];
        music.play();
        score = 0;

    }
    //if food eat successful the update the score and regenerate food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        foodSound.play();
        score+=1;
        score.innerHTML = "Score: " + score ;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }

    //moving th snake
    for (let i = snakeArr.length-2; i >= 0; i--) {
        // const element = array[i];
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part2: Render the snake 
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement  = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){
            snakeElement.classList.add("head");
        }else{
            snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement);
    })
    //Display food 
    foodElement  = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}


//Main logic starts here
let hiScore = localStorage.getItem('hiScoreBox');
if(hiScore === null){
    hisScoreVal=0;
    localStorage.setItem("hiScore",JSON.stringify(hisScoreVal))
}
else{
    hisScoreVal= JSON.parse(hiScore);
    hiScoreBox.innerHTML = "HiScore: " + hiScore ;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir = {x:0,y:1}; //start thr game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
    
        case "ArrowDown":
            // console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
    
        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
    
        case "ArrowRight":
            // console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
});
