const canvas = document.getElementById('toile');
const context = canvas.getContext('2d');
context.fillStyle = "#FFFFFF";
context.fillRect(0, 0, canvas.width, canvas.height);

const minimunWidth = canvas.width*0.005
class Cercle 
{
	constructor(color,size)
	{ 	
		this.color = color
		this.size = size
		this.change = "agrandir"
		this.increaseSize = 1.1
		this.decreaseSize = 0.9
	}
					
	toChange()
	{
		if(this.size > canvas.width*0.45)
		{
			this.change = "amoindrir"
		}
		if(this.size < minimunWidth)
		{
			this.change = "agrandir"
		}
		if(this.change == "amoindrir")
		{
			this.size *= this.decreaseSize
		}
		if(this.change == "agrandir")
		{
			this.size *= this.increaseSize
		}
	}
							
		draw()
		{
			context.beginPath();
			context.arc(canvas.width*0.5, canvas.height*0.5,this.size, 0, 2*Math.PI);
			context.stroke();
		}
	}

function doTheEvolution()
{
	var answer = readTheAnswer();
	if (answer == "N")
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	nouveauCercle.draw();
	nouveauCercle.toChange();
	var timeInterval = settingTimeInterval();
	setTimeout(doTheEvolution, timeInterval);
}

function readTheAnswer()
{
	var answers = document.getElementsByName('answer');
	var answer;
	for(var i = 0; i < answers.length; i++)
	{
		if(answers[i].checked)
		{
			answer = answers[i].value;
		}
	}
	return answer
}

function settingTimeInterval()
{
	var answer = document.getElementsByName('timeInterval')[0].value;
	//alert(answer);
	return answer
}

let nouveauCercle = new Cercle("red",25);
var timeInterval = 6000;
setTimeout(doTheEvolution, timeInterval);
//setInterval(function(){doTheEvolution();}, timeInterval);  //dessiner un cercle tous les 60 millisecondes