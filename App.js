
            //  Start game
            // Flash Buttons & livel up

let gameSeq = [];
  let userSeq = [];

  let btns = ["red","yellow","green","purple"];


  let started = false;
  let level = 0;
  let highest = 0;

  let h2 = document.querySelector("h2");

  document.addEventListener("keypress",function (){
    if(started == false){
    console.log("game started");
       started = true;

       levelup();
    }
  })

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
      btn.classList.remove("flash");  
    }, 300);
}


function useFlash(btn){
    btn.classList.add("useflash");
    setTimeout( function(){
      btn.classList.remove("useflash");  
    }, 250);
}


  function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    // random btn choose;
    let randIdx = Math.floor(Math.random()*4);          
    let randColor = btns[randIdx];                     
    let randBtn = document.querySelector(`.${randColor}`);        

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

  }


  function checkAns(idx) {
    // console.log("curr level : ", level);

    // let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]){
        // console.log("sava value");
        if(userSeq.length == gameSeq.length){
          setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },150);

        reset();
    }

  }

 

                        //  Button Event Listeners
  function btnPress(){
    console.log(this);
    let btn = this;
    useFlash(this);
    let useColor = btn.getAttribute("id");
    // console.log(useColor);
    userSeq.push(useColor);
    checkAns(userSeq.length-1);
  }

  let allBtns = document.querySelectorAll(".btn");
  for(allBtn of allBtns){
      allBtn.addEventListener("click",btnPress);
  }


  let i = document.querySelector("i");
  // console.dir(i);
  
    

 function reset(){
  if(highest<=level){
    i.innerHTML = `<b>Highest Level</b> ${level}`; 
}
  setTimeout(() => {
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
  }, 1000);
};

  

 

  
 

