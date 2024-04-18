let score=20
let highscore=0
let secretnumber=Math.trunc(Math.random()*20)


document.querySelector('.check').addEventListener('click', function(){
    if (score>0){
        console.log("hi",secretnumber)
    const guessNumber =Number(document.querySelector('.guess').value)
    if (!guessNumber)
    {
        document.querySelector('.message').textContent='❤️ Number'
    }
    else if (guessNumber==secretnumber){
        document.querySelector('.message').textContent="Good"
        document.querySelector(".score").textContent=score
        document.querySelector('.number').textContent=guessNumber;
        document.querySelector('body').style.backgroundColor="#60b347"
        document.querySelector('.number').style.width="30rem";
        if (score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent=highscore}
    }
    else{
        if (guessNumber<=secretnumber){
        document.querySelector('.message').textContent="Too low";
        }
        else if (guessNumber>=secretnumber){
        document.querySelector('.message').textContent="Too High";

        }
        score-=1
        document.querySelector(".score").textContent=score
        if (score==0){
            document.querySelector('.message').textContent="You lost the game";    
        }}
    }
    else{
        document.querySelector('.message').textContent="You lost the game";
    }})
document.querySelector('.again').addEventListener('click',function(){
    score=20
    secretnumber=Math.trunc(Math.random()*20)
        document.querySelector('.message').textContent="Start Guessing..."
        document.querySelector(".score").textContent=score
        document.querySelector('.guess').value=""
        document.querySelector('body').style.backgroundColor="#222"
        document.querySelector('.number').style.width="15rem";
        document.querySelector('.number').textContent="?";      
})