const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0,0,0);  
  translate(400,200);
  rotate(-90);
  angleMode(DEGREES);

  let h = hour();
  let mn = minute(); 
  let sc = second();

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(h,0,60,0,360);
  minAngle = map(mn,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  stroke(255,0,0);
  point(0,0);
  strokeWeight(10);
  noFill();
  arc(0,0,290,290,0,scAngle);

  stroke(0,0,255);
  arc(0,0,250,250,0,hrAngle);

  stroke(0,255,0);
  arc(0,0,270,270,0,minAngle);
}