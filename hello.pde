void setup() {  
  size(200, 200);  
  background(0);  
  stroke(255);  
  
  window.setInterval(board.update,5000);
  
}

void draw(){
if($("#ball").text()==="off"){
fill( 255, 0, 0 );   
}
else {
fill( 0, 0, 0 );  
}
stroke(255);
ellipse(100, 100, 100, 100); 

}