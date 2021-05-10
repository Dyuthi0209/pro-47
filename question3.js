class Question3 {

    constructor() {
      this.title_3 = createElement('h1')
  
      this.input_3 = createInput('Enter Correct Option No..');
      this.button_3 = createButton('Submit');
      this.question_3 = createElement('h3');
      this.option1_3 = createElement('h4');
      this.option2_3 = createElement('h4');
      this.option3_3 = createElement('h4');
      this.option4_3 = createElement('h4');
      
      this.answer_3 = createElement('h3')
      
    }
  

hide(){
  this.title_3.hide();
  this.question_3.hide();
  this.option1_3.hide();
  this.option2_3.hide();
  this.option3_3.hide();
  this.option4_3.hide();
  this.answer_3.hide();
  this.button_3.hide();
  this.input_3.hide();
}

display(){

  this.title_3.html("QUIZ");
  this.title_3.position(400, 40);

  this.question_3.html("Question:- " );
  this.question_3.position(300, 150);
  this.option1_3.html("1: " );
  this.option1_3.position(300, 170);
  this.option2_3.html("2: " );
  this.option2_3.position(300, 190);
  this.option3_3.html("3: " );
  this.option3_3.position(300, 210);
  this.option4_3.html("4: " );
  this.option4_3.position(300, 230);

  this.input_3.position(300, 300);
  this.button_3.position(550, 300);
  
 

  this.button_3.mousePressed(()=>{    
    this.answer_3.html("answer");   
    this.answer_3.position(300,400);
   
    nextButton_3=createSprite(680,350,10,10);
    nextButton_3.addImage("button", buttonImg);
    nextButton_3.scale=0.1;

  })

  if(mousePressedOver(nextButton_3)){
    this.hide();
    nextButton_3.visible=false;
 
    Q=4;

    if(Q===4){
      question4.display();
      }
  }

  

}


  }