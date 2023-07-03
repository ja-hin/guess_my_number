
let num=Math.trunc(Math.random()*20)+1;
let Newscore=20;
let highscore=0;

document.querySelector('.btn3').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.btn2').value);
    if(!guess) {
        document.querySelector('.status').textContent ='⛔⛔ No number present';
    }
    else if(guess=== num){
        document.querySelector('.number').textContent=num;
        document.querySelector('.status').textContent ='Correct Number 💐💐';
        document.querySelector('body').style.backgroundColor ='green';
        document.querySelector('.box').style.width = '200px';
       if(Newscore>highscore){
        highscore=Newscore;
        document.querySelector('.highscore').textContent=highscore;
       }
   }else if(guess>num){
    if(Newscore>1){
        document.querySelector('.status').textContent ='Number is too high 📈📈';
        Newscore--
        document.querySelector('.Newscore').textContent= Newscore;   
    } else {
        document.querySelector('.status').textContent ='You Lost the game 😞😞';
        document.querySelector('.Newscore').textContent= 0;
    }
    
   }else if (guess<num){
     if(Newscore>1){
            document.querySelector('.status').textContent ='Number is too Low 📉📉';
            Newscore--
            document.querySelector('.Newscore').textContent= Newscore;
        } else {
            document.querySelector('.status').textContent ='You Lost the game 😞😞';
            document.querySelector('.Newscore').textContent= 0;
        
        }   
        
        
    }
});
document.querySelector('.btn').addEventListener
('click',function(){
    Newscore=20;
    num=Math.trunc(Math.random()*20)+1;
    document.querySelector('.status').textContent ='Start Guessing ....😜😜';
    document.querySelector('.Newscore').textContent= Newscore ;
    document.querySelector('.number').textContent='??';
    document.querySelector('.btn2').value='';
    document.querySelector('body').style.backgroundColor =' rgb(34, 40, 40)';
    document.querySelector('.box').style.width = '100px';
    



});