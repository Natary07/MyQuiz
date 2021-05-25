class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      this.question=createElement("h3");
      this.option1=createElement("h4");
      this.option2=createElement("h4");
      this.option3=createElement("h4");
      this.option4=createElement("h4");
    }
  
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MyQuiz Game");
      title.position(350, 0);
      
     this.question.html("Question: - What starts and ends with the letter 'E', but has only one letter?");
     this.question.position(150,80);
     this.option1.html("1: Everyone ");
     this.option1.position(150,120);
     this.option2.html("2: Envelope");
     this.option2.position(300,120);
     this.option3.html("3: Estimate");
     this.option3.position(450,120);
     this.option4.html("4: Example");
     this.option4.position(600,120);
     this.input.position(320,350);
     this.button.position(480,350);
      }
  
    }
  
  