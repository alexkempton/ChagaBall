void setup() {  
  size(200, 200);  
  background(100);  
  stroke(255);  
  
  window.setInterval(board.update,10000);
  
}

void draw(){
if($("#ball").text()==="off"){
fill( 0, 121, 184 );   
}
else {
fill( 0, 0, 0 );  
}
stroke(255);
ellipse(100, 100, 100, 100); 

}