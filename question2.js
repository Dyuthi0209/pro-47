class Question2 {

    constructor() {
      this.title_2 = createElement('h1')
      this.input_2 = createInput('Enter Correct Option No..');
      this.button_2 = createButton('Submit');
    
      this.question_2 = createElement('h3');
      this.option1_2 = createElement('h4');
      this.option2_2 = createElement('h4');
      this.option3_2 = createElement('h4');
      this.option4_2 = createElement('h4');
      
      this.answer_2 = createElement('h3')
      
    }
  

hide(){
  this.title_2.hide();
  this.question_2.hide();
  this.option1_2.hide();
  this.option2_2.hide();
  this.option3_2.hide();
  this.option4_2.hide();
  this.answer_2.hide();
  this.button_2.hide();
  this.input_2.hide();
}

display(){

  this.title_2.html("QUIZ");
  this.title_2.position(400, 40);

  this.question_2.html("Question:- " );
  this.question_2.position(300, 150);
  this.option1_2.html("1: " );
  this.option1_2.position(300, 170);
  this.option2_2.html("2: " );
  this.option2_2.position(300, 190);
  this.option3_2.html("3: " );
  this.option3_2.position(300, 210);
  this.option4_2.html("4: " );
  this.option4_2.position(300, 230);

     
  this.input_2.position(300, 300);
  this.button_2.position(550, 300);
  
 

  this.button_2.mousePressed(()=>{    
    this.answer_2.html("answer");   
    this.answer_2.position(300,400);
   
    nextButton_2=createSprite(680,350,10,10);
    nextButton_2.addImage("button", buttonImg);
    nextButton_2.scale=0.1;

  })

  if(mousePressedOver(nextButton_2)){
    this.hide();
    nextButton_2.visible=false;
 
    Q=3;

    if(Q===3){
      question3.display();
      }
  }

  

}


  }