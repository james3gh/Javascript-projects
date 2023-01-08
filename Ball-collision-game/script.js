const score = document.querySelector(".score");
const details = document.querySelector(".details");
const gameArea = document.querySelector(".gameArea");

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false,
}

setInterval(()=>{
    if(player.speed>=15)
    player.speed=15;
    else
    player.speed++;
},5000);


let player = {
    speed: 6,
    score:0
};

details.addEventListener('click',gameStart);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  

function Collide(a,b){
    aPost = a.getBoundingClientRect();
    bPost = b.getBoundingClientRect();

    return !((aPost.bottom < bPost.top) || (aPost.top > bPost.bottom) || ( aPost.right < bPost.left) || (aPost.left > bPost.right))
}

function endGame(){
    player.speed = 6;
    player.start = false;
    details.classList.remove("hide");
    details.innerHTML = "Game over <br/> Your final score is " + player.score + "<br/>Press here to restart again";
}

function moveEnemy(ball){
    let moveEnemyBall = document.querySelectorAll(".enemy");

    for(let j=0;j<moveEnemyBall.length;j++){

        if(Collide(ball,moveEnemyBall[j])){
            endGame();
        }
        if(moveEnemyBall[j].y >= 850){
            moveEnemyBall[j].y = -200;
            moveEnemyBall[j].style.left = Math.floor(Math.random()*445) + "px";
        }
        moveEnemyBall[j].y +=player.speed;
        moveEnemyBall[j].style.top = moveEnemyBall[j].y + "px";
    }
}

function gamePlay(){

    let ball = document.querySelector('.ball');
    let road = gameArea.getBoundingClientRect();
    // console.log(road);
    if(player.start){

        moveEnemy(ball);

        if(keys.ArrowUp && player.y> (road.top + 150))
            player.y -= player.speed;
        if(keys.ArrowDown && player.y<(road.bottom-180))
            player.y +=player.speed;
        if(keys.ArrowLeft && player.x>0)
            player.x -=player.speed;
        if(keys.ArrowRight && player.x <(road.width -70))
            player.x +=player.speed;
        
        ball.style.top = player.y + "px";
        ball.style.left= player.x + "px";

        window.requestAnimationFrame(gamePlay);

        player.score++;
        let totalScore = player.score - 1;
        score.innerText = "Score is " + totalScore;
}

}

function gameStart(){

    details.classList.add("hide");
    gameArea.innerHTML = "";

    player.start  = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    let ball = document.createElement("div");
    ball.setAttribute("class","ball");
    gameArea.appendChild(ball);
    player.x = ball.offsetLeft;
    player.y = ball.offsetTop;

    for(let i=0;i<3;i++){
        let enemyBall = document.createElement("div");
        enemyBall.setAttribute('class','enemy');
        enemyBall.y = ((i+1)*300)*(-1) ;
        enemyBall.style.top = enemyBall.y + "px";
        enemyBall.style.backgroundColor = getRandomColor();
        enemyBall.style.left = Math.floor(Math.random()*300) + "px";
        gameArea.appendChild(enemyBall);   
    }
}

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
}
function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
}