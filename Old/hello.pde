void setup() {  
  size(300, 300);  
  background(255);  
  stroke(255);  
  	$("#highscore").html("0");
	$("#ball").html("on");
  window.setInterval(board.update,5000);
  
}

void draw(){
if($("#ball").text()==="off"){
fill( 255, 0, 0 );   
}
else if($("#ball").text()==="on"){
fill( 0, 128, 0 );  
}
stroke(255);
ellipse(100, 100, 100, 100); 

}