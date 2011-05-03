var canvas;
var stage;
var spinner;
var erlik;
var target_upper;
var target_under;
var target_underStatus = -1;
var target_underCounter = 0;
var erlikDirection = 1;
var imgSeq = new Image();		// The image for the sparkle animation
var bmpSeq;					
var fpsLabel;

var staticelements = new Array();



var lines;


function init() {
	// create a new stage and point it at our canvas:
	canvas = document.getElementById("testCanvas");
	stage = new Stage(canvas);
	
	// load the sprite sheet image for star, and wait for it to complete before proceeding:
	imgSeq.onload = handleImageLoad;
	imgSeq.src = "img/sparkle_21x23.png";
}

function handleImageLoad() {
	// Lines
	
	lines = new Shape();
	lines.graphics.beginStroke("orange")
			.setStrokeStyle(3 , 0 , 0 , 0 )
			.moveTo(0, 10)
			.lineTo(canvas.width, 10)
			.lineTo(canvas.width, canvas.height)
			.lineTo(0, canvas.height)
			.lineTo(0, 10)
			.moveTo(0,60)
			.lineTo(canvas.width,60)
			.moveTo((canvas.width/2),60)
			.lineTo((canvas.width/2),canvas.height)
			.moveTo(0,canvas.height/2+30)
			.lineTo(canvas.width,canvas.height/2+30)
			.closePath();
			
	stage.addChild(lines);


	
	// Spinner
	var myImg = new Image();
	myImg.src = "img/spinner.png"
	spinner = new Bitmap(myImg);
	spinner.x = 290;
	spinner.y = 170;
	spinner.regY = 170;
	spinner.regX = 150;
	stage.addChild(spinner);

	
	// Target under
	var target_underImg = new Image();
	target_underImg.src = "img/target_downer.png"
	target_under = new Bitmap(target_underImg);
	target_under.x = 130;
	target_under.y = 260;
	target_under.regY = 81;
	target_under.regX = 75;
	stage.addChild(target_under);
	
	// Target upper
	var target_upperImg = new Image();
	target_upperImg.src = "img/target_upper.png"
	target_upper = new Bitmap(target_upperImg);
	target_upper.x = 130;
	target_upper.y = 250;
	target_upper.regY = 50;
	target_upper.regX = 45;
	stage.addChild(target_upper);
	
	// Erlik
	var erlikImg = new Image();
	erlikImg.src = "img/likhet.png"
	erlik = new Bitmap(erlikImg);
	erlik.x = 90;
	erlik.y = 90;
	erlik.regY = 81;
	erlik.regX = 75;
	erlik.scaleX = 0.5;
	erlik.scaleY = 0.5;
	stage.addChild(erlik);
	
	staticelements[0] = erlik.clone();
	staticelements[0].x = 40;
	stage.addChild(staticelements[0]);
	staticelements[1] = erlik.clone();
	staticelements[1].x = 140;
	stage.addChild(staticelements[1]);
	
	
	// Text
	var label1 = new Text('Today\'s score: ', '30px digital-7', "red");
	label1.x = 20;
	label1.y = 50;
	stage.addChild(label1);
	
	var label2 = new Text('Higscore: ', '30px digital-7', "red");
	label2.x = 500;
	label2.y = 50;
	stage.addChild(label2);

	var higshcorelabel = new Text('182 332', '40px digital-7', "red");
	higshcorelabel.x = 650;
	higshcorelabel.y = 50;
	stage.addChild(higshcorelabel);
	
	
	
	// start the tick with 20 fps
	Ticker.setFPS(20);
	Ticker.addListener(window);
	
	



	

	


	
}


function tick() {



	if(spinnerStatus==false){
		spinner.rotation = spinner.rotation+10;
	}
	else spinner.rotation = 0;
	
	// Erlik
	if(erlikDirection == 1){
		erlik.scaleY+=0.05;
		erlik.scaleX+=0.05;
	}
	
	else{
		erlik.scaleY-=0.05;
		erlik.scaleX-=0.05;
	}
	if(erlik.scaleY<0.02){
		erlikDirection = 1;
	}
	else if(erlik.scaleY>1.5){
		erlikDirection = 0;
	}
	
	target_underCounter++;
	if(target_underCounter>5){
		if(target_underStatus<0)target_underStatus=1;
		else target_underStatus=-1;
		target_underCounter=0;
	}
	
	if(targetStatus == true){
	
	if(target_underStatus<0){
		target_under.visible=false;
	}
	else{
		target_under.visible=true;
	}
}
else {
	target_under.visible=false;
}
	
	// draw the updates to stage
	stage.update();
}




// Koden under er for Œ hente data fra fil - ikke i bruk i dette eksempelet
var board = {};

board.update = function(){
	$.getJSON("test.json", function(json) {
		$("#highscore").html(json.highscore);
		$("#ball").html(json.satelitter["ball"]);
	});

};




