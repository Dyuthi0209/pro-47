class Question4 {

    constructor() {
      this.title_4 = createElement('h1')
  
      this.input_4 = createInput('Enter Correct Option No..');
      this.button_4 = createButton('Submit');
      this.question_4 = createElement('h3');
      this.option1_4 = createElement('h4');
      this.option2_4 = createElement('h4');
      this.option3_4 = createElement('h4');
      this.option4_4 = createElement('h4');
      
      this.answer_4 = createElement('h3')
      
    }
  

hide(){
  this.title_4.hide();
  this.question_4.hide();
  this.option1_4.hide();
  this.option2_4.hide();
  this.option3_4.hide();
  this.option4_4.hide();
  this.answer_4.hide();
  this.button_4.hide();
  this.input_4.hide();
}

display(){

  this.title_4.html("QUIZ");
  this.title_4.position(400, 40);

  this.question_4.html("Question:- " );
  this.question_4.position(300, 150);
  this.option1_4.html("1: " );
  this.option1_4.position(300, 170);
  this.option2_4.html("2: " );
  this.option2_4.position(300, 190);
  this.option3_4.html("3: " );
  this.option3_4.position(300, 210);
  this.option4_4.html("4: " );
  this.option4_4.position(300, 230);

  this.input_4.position(300, 300);
  this.button_4.position(550, 300);
  
 

  this.button_4.mousePressed(()=>{    
    this.answer_4.html("answer");   
    this.answer_4.position(300,400);
   
    nextButton_4=createSprite(680,350,10,10);
    nextButton_4.addImage("button", buttonImg);
    nextButton_4.scale=0.1;

  })

  if(mousePressedOver(nextButton_4)){
    this.hide();
    nextButton_4.visible=false;
 
    Q=5;

    if(Q===5){
      question5.display();
      }
  }

  

}


  }