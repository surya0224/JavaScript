const score0=document.querySelector("#score--0")
const score1=document.getElementById("score--1")
const score0Curr=document.querySelector("#current--0")
const score1Curr=document.getElementById("current--1")
const player0=document.querySelector(".player--0")
const player1=document.querySelector(".player--1")
let player=0
let playing =true
score0.textContent=0
score1.textContent=0

score0Curr.textContent=0
score1Curr.textContent=0

const dice=document.querySelector(".dice")
dice.classList.add("hidden")

function playerDisabler(player){
    if (player==0){
        player0.classList.remove("player--active")
        player1.classList.add("player--active")
        // we can use .toggle
        score0Curr.textContent=0
    }
    else{
        player1.classList.remove("player--active")
        player0.classList.add("player--active")
        score1Curr.textContent=0
    }
}
document.querySelector(".btn--roll").addEventListener('click',function(){
   if (playing){const num=Math.trunc(Math.random()*6)+1;
   dice.classList.remove("hidden");
   dice.src=`dice-${num}.png`
   if (num==1){
        playerDisabler(player)
        player=player?0:1
   }
   else if (player==0){
        score0Curr.textContent=Number(score0Curr.textContent)+num
   }
   else {
    score1Curr.textContent=Number(score1Curr.textContent)+num
   }
}});

document.querySelector('.btn--new').addEventListener('click',function(){
    player=0
    dice.classList.add("hidden")
    score0.textContent=0
    score1.textContent=0
    score0Curr.textContent=0
    score1Curr.textContent=0
    playerDisabler(1)
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    playing=true
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    
    if (playing){if (player==0){
        score0.textContent=Number(score0.textContent)+Number(score0Curr.textContent)
    }
    else{
        score1.textContent=Number(score1.textContent)+Number(score1Curr.textContent)
    }
    playerDisabler(player);
    player=player?0:1
    const nothing=Number(score0.textContent)>=100?player0.classList.add("player--winner"):Number(score1.textContent)>=100?player1.classList.add("player--winner") :"";
    if (Number(score0.textContent) >=100||Number(score1.textContent)>=100){
        playing=false

    }
}});