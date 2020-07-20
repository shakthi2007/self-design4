class Form {
    constructor(){
this.input = createInput("Name");
this.button = createButton('Play');
this.greeting=createElement('h2');
}

input(){
    this.input.hide();
    this.button.hide();
    
   }
   display(){
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);7
    this.button.mousePressed(()=>{
    gameStarted=true;
    this.greeting.html("Hello "+this.input.value() )
    this.greeting.position(displayWidth/2 +20, displayHeight/10);
    this.input.hide();
    this.button.hide();

    })
   }

}

