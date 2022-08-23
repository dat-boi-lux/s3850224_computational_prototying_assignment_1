let timer = 3; //three second timer for welcome screen sequence
let screen_w = 1024;
let screen_h = 768;
let selected_shape = "square"; //this variable sets which shape tool is in use, by default, it is now a square
let r = 0;
let g = 0;
let b = 0;
let welcome_screen_state = 1;

let img;
function preload() {
  img = loadImage( 'dog.png');
}

function setup() {
  welcome_screen();
  createCanvas(screen_w, screen_h);
  background (255);
  imageMode(CENTER);

}

function welcome_screen(){
  noStroke();
  fill(200);
  rect(0, 0, screen_w, screen_h);
  
  push();
  fill (0);
  textSize(32);
  text('Welcome To My Paint Program', screen_w / 3.5, screen_h / 2);
  text('Click a Colour or Shape', screen_w / 2.9, screen_h / 1.6);
  text('Press C to Clear Screen', screen_w / 2.9, screen_h / 1.2);
  pop();
}

function draw_toolbar(){ //create the tool bar which contains all the clickable tools and colours 
  push();
  noStroke();
  fill (255);
  rect(0, 0, screen_w, 40)
  pop();
  
  push();
  noStroke();
  fill (0);
  square(40 * 0, 0, 40)
  pop();
  
  push();
  noStroke();
  fill (255);
  square(40 * 1, 0, 40)
  pop();
  
  push();
  noStroke();
  fill (255, 0, 0);
  square(40 * 2, 0, 40)
  pop();
  
  push();
  noStroke();
  fill (0, 255, 0);
  square(40 * 3, 0, 40)
  pop();
  
  push();
  noStroke();
  fill (0, 0, 255);
  square(40 * 4, 0, 40)
  pop();
  
  push();
  noStroke();
  fill (0, 0, 0);
  square(40 * 5 + 10, 10, 20)
  pop();
  
  push();
  noStroke();
  fill (0, 0, 0);
  circle(40 * 6 + 20, 20, 20)
  pop();
  
  push();
  noStroke();
  fill (0, 0, 0);
  triangle(0 + 40 * 7 + 10, 40 - 10, 20 + 40 * 7, 0  + 10, 40 + 40 * 7 - 10, 40 - 10 )
  pop();
  
  push();
  noStroke();
  fill (0, 0, 0);
  imageMode(CORNER);
  image(img, 0 + 40 * 8, 0, 40, 40);
  pop();
} 

function select_colour_tool(){ //function to determine which shape and colour the user has selected
  if (mouseIsPressed == true && mouseX <= 40 * 1 && mouseY <= 40){ //if mouse is within these bounds then do this:
    print ('black');
    r = 0;
    g = 0;
    b = 0;
  }
  if (mouseIsPressed == true && mouseX <= 40 * 2 && mouseX >= 40 * 1 && mouseY <= 40){
    print ('white');
    r = 255;
    g = 255;
    b = 255;
  }
  if (mouseIsPressed == true && mouseX <= 40 * 3 && mouseX >= 40 * 2 && mouseY <= 40){
    print ('red');
    r = 255;
    g = 0;
    b = 0;
  }
  if (mouseIsPressed == true && mouseX <= 40 * 4 && mouseX >= 40 * 3 && mouseY <= 40){
    print ('green');
    r = 0;
    g = 255;
    b = 0;
  }
  if (mouseIsPressed == true && mouseX <= 40 * 5 && mouseX >= 40 * 4 && mouseY <= 40){
    print ('blue');
    r = 0;
    g = 0;
    b = 255;
  }
  if (mouseIsPressed == true && mouseX <= 40 * 6 && mouseX >= 40 * 5 && mouseY <= 40){
    print ('square');
    selected_shape = "square";
  }
  if (mouseIsPressed == true && mouseX <= 40 * 7 && mouseX >= 40 * 6 && mouseY <= 40){
    print ('circle');
    selected_shape = "circle";
  }
  if (mouseIsPressed == true && mouseX <= 40 * 8 && mouseX >= 40 * 7 && mouseY <= 40){
    print ('triangle');
    selected_shape = "triangle";
  }
  if (mouseIsPressed == true && mouseX <= 40 * 9 && mouseX >= 40 * 8 && mouseY <= 40){
    print ('dog');
    selected_shape = "dog";
  }
} 

function paint(){
  if(mouseIsPressed == true && mouseY >= 40) { //if mouse is pressed over the toolbar:
    push();
    noStroke();
    fill(r,g,b);
    if (selected_shape == "square") {
      square(mouseX - 20, mouseY - 20, 40)
    }
    else if (selected_shape == "circle") {
      circle(mouseX, mouseY, 40)
    }
    else if (selected_shape == "triangle") {
      triangle (mouseX - 20, mouseY + 20, mouseX + 20, mouseY + 20, mouseX, mouseY - 20);
    }
    else if (selected_shape == "dog") {
      image(img, mouseX, mouseY, 100, 100);
    }
    pop();
  }
}

function draw() {
  print(timer);
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer <= 0 && welcome_screen_state == 1) {
    welcome_screen_state = 0;
    push();
    fill(255);
    rect(0,0,screen_w,screen_h)
    pop();
  }
  
  if (welcome_screen_state == 1) {
    welcome_screen();
  }
  
  select_colour_tool(); //user select which colour or tool
  paint(); //paint some shapes and colours down
  draw_toolbar(); //ensure the tool bar is being drawn over the canvas at all times
}

function keyTyped(){ //if 'c' is pressed, then "clear" the screen. clear() function returned screen to light grey instead of white, so this method was used
    if (key === 'c') {
      print ('cleared');
      push();
      fill(255);
      rect(0,0,screen_w,screen_h)
      pop();
    }
  }