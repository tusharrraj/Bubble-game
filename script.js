
function makeBubble(){
    var clutter="";

    for(let i=1;i<=180;i++){
        var no=Math.floor(Math.random()*15);
     clutter +=`<div class="bubble">${no}</div>`;
    }
    
    document.querySelector("#btmPanel").innerHTML=clutter;
}


var timer=60;
function runTimer(){
   var timerCount=setInterval(()=>{
        if(timer>0){
        timer--;
        document.querySelector("#Timer").textContent=timer;
        }
        else{
            clearInterval(timerCount)
            // var timer=0;
            const btmPanel=document.querySelector("#btmPanel").innerHTML=`<h1>Time Over = ${score}</h1> <br> <h2>For Play Agin Refresh Page </h2>`;


        }
    },1000)
}

var hitNo=0
function newHit(){
     hitNo=Math.floor(Math.random()*15)
    document.querySelector("#hit").innerHTML=hitNo
}

var score=0 ;
function increseScore(){
    score += 1;
    document.querySelector('#score').textContent=score;


}


document.querySelector("#btmPanel").addEventListener("click",function(details){
    console.log("target div=",details.target);
    console.log("To See number only but number in on String=",details.target.textContent);
    console.log("It is interger nunber=",Number(details.target.textContent));
    var target= Number(details.target.textContent);

    if(target===hitNo){
        increseScore();
        makeBubble();
        newHit();
        // alert('Congratulation You Hit the Number')
    }
    else{
      const btmPanel=   document.querySelector("#btmPanel")
      btmPanel.innerHTML=`<h1> Game Over = ${score} </h1> <br> <h2>For Play Agin Refresh Page </h2>`;
    // btmPanel.innerHTML=`${btmPanel.classList.add("end")}`;

    }
})



newHit();
runTimer();
makeBubble();
increseScore();

