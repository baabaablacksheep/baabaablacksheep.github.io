
var ctx = document.getElementById('my_canvas').getContext('2d');
var percent=document.getElementById('percent');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;

function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 15;
	ctx.fillStyle = '#182544';
	ctx.strokeStyle = '#FFFFFF';
	ctx.textAlign = 'center';
	percent.innerHTML= al+'%';
	ctx.beginPath();
	ctx.arc(125, 125, 110, start, diff/10+start,false);
	ctx.stroke();
	if(al >= 100){
		// Add scripting here that will run when progress completes
		$("#container").fadeOut(1000);
		$("#my_canvas").fadeOut(400);
		$("#percent").fadeOut(1000);
		$("#img_logo").stop().animate({
					'height':'600px',
					'width':'600px',
				});
		clearTimeout(sim);
		setTimeout(function temp(){window.location.href = "home.html";}, 2300);
	    
	}
	else if(al>=92){
		al=al+1;
	}
	else if(al>=50){
		al=al+6;
	}
	else if(al>=35){
		al=al+2;
	}
	else{
		al=al+4;
	}
}
var sim = setInterval(progressSim, 100);


