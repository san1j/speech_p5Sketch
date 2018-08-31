var words=[];
var foo = new p5.SpeechRec();
foo.onResult = letterBubbles; 
foo.continuous = true;
foo.start(); 

function setup() { 
  createCanvas(windowWidth,windowHeight);
  textFont("Times");
  background(0);
  frameRate(18);
  ellipseMode(CENTER);
  let h2 = createElement('h2','Start Speaking!!');
  h2.position(10,10)
} 

function bubble() { 
    words.forEach(letter=>{
    push();      
    translate(letter[letter.length-2],letter[letter.length-1]);
    rotate(radians(frameCount));
   	for (var i = 0; i < letter.length-2; i++) {
        push();
        translate(0,0);
		rotate(TWO_PI * i / letter.length+20);
        textSize(18);
        fill(220,20,60);
        text(letter[i],letter.length+40,0);
        pop();
	}
    pop();
  })
}

function draw(){
   background(0)
   bubble();
}


function letterBubbles(){
    console.log(foo.resultString)
     var letters = foo.resultString.split("");
     var  x =  random(50,width-50)
     var  y =  random(50,height-50)
     letters.push(x);
     letters.push(y);
     words.push(letters)
     bubble();
}