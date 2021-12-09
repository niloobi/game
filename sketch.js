let getTime = Date.now();
let bugs  = [];
var count = 0;

var b=document.querySelector('.start');
var b=document.querySelector('button');
var btn2 = document.querySelector('.hide-reload')


function setup() {
  createCanvas(650,650);
    
   for(let i=0 ; i < 90; i ++){
      
    bugs.push(new Jitter());
   }
  }
function draw() {
   
  for (let i= 3; i < bugs.length; i ++){
    bugs[i].move();
    bugs[i].display() ;
    fill(190, 108, 108)
    stroke(247, 171, 196)
    frameRate(800)
    
  }
}

window.onload=(event)=>{
  setInterval(function(){
    b.style.transform=`translate(${Math.floor(Math.random()
      * 4)+20}vw,${Math.floor(Math.random() * 60)+40}vh)`
  }, 1700);
 
  
}


b.onclick = function () {
    document.querySelector('audio').play();
    count++;
    document.querySelector('h1').innerHTML=count;
    setInterval(function checkTime() {
      let gameTime = Date.now(); - getTime;
      if (gameTime > 3000) {
        result = document.querySelector('h1');
        result.innerHTML = "Try Again";
        b.classList.add('hide-ball')
        btn2.classList.remove('hide-reload')
        btn2.classList.add('show-reload')
      }
    }, 3000)
    getTime = Date.now();
}

btn2.addEventListener('click', () => location.reload());





