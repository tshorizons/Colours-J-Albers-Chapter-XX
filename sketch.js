
let z=2;
let w=2;
let s=0;

function setup() {
  createCanvas(400, 600);
  noLoop();
}

function draw() {
  colorMode(HSB,360,128,100);
  background(180,128,100);


  for(let i=0; i<400;i=i+40){
    console.log(i);
    noStroke()
    fill(0,128,100-w);
    rect(0,i,150,40);
    w=w+2;
}
for(let i=0; i<400;i=i+40){
  console.log(i);
  noStroke()
  fill(0,128,100-z);
  rect(200,i,150,42);
  s=s+1;
  z=2**(s);
}


}
