class Jitter{
    constructor(){
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(35,35);
      this.speed =50;
      this.myFill = random(190, 108, 108);
      this.myFill1 = random(190, 108, 108);
      this.myFill2 = random(190, 108, 108);
      this.myWobble =1;
      this.clear = random(247, 171, 196);
    }
    
   move(){
     this.x +=  random(-this.speed*this.myWobble, this.speed*this.myWobble);
    this.y += random(-this.speed*this.myWobble, this.speed*this.myWobble);
     
   }
   display(){
    fill(this.myFill,this.myfill,this.clear); 
    ellipse(this.x,this.y,this.diameter,this.diameter);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    
     
   } }