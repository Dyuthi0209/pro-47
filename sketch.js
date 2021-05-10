var bg;
var question;
var nextButton, buttonImg;
var question2;
var question3;
var question4;
var question5;
var Q=1;
var nextButton_2;
var nextButton_3;
var nextButton_4;
var nextButton_5;

function preload(){
bg=loadImage("images/bg.jpg")
buttonImg=loadImage("images/nextButton.png");


}
function setup() {
  createCanvas(700,400);
question=new Question();

question2=new Question2();
question3=new Question3();
question4=new Question4();
question5=new Question5();
}

function draw() {
  background(bg);  
  question.display();
  
  if(Q===2){
    question2.display();
  }

  if(Q===3){
    question3.display();
  }

  if(Q===4){
    question4.display();
  }

  if(Q===5){
    question5.display();
  }


  drawSprites();
}