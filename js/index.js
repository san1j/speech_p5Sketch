var input;
var letters=[];

function setup() { 
  createCanvas(windowWidth,windowHeight);
  input = createInput();
  textFont("Times");
  input.position(100,height-40);
  background(0);
} 

function bubble() { 
 translate(random(width),random(height));
	for (var i = 0; i < letters.length; i++) {
		push();
		rotate(TWO_PI * i / letters.length+6);
    textSize(18);
    fill(255);
		text(letters[i],letters.length+35,0);
		pop();
	}
  
}

function keyPressed() {
    if(keyCode == ENTER || keyCode == RETURN) {
        var inputVal = input.value();
        letters = inputVal.split("");
        bubble();
        input.value('');
    }
   
}