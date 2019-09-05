const canvas3 = document.getElementById('toile3');
const context3 = canvas3.getContext('2d');
context3.fillStyle = "#FFFFFF";
context3.fillRect(0, 0, canvas3.width, canvas3.height);

class Cercle3
{
	constructor(color,size)
	{
		this.x = canvas3.width*0.5
		this.y = canvas3.height*0.5
		this.color = color
		this.change = "agrandir"
		this.size = size
	}

	draw()
	{
		context3.beginPath();
		context3.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		context3.stroke();
	}
}

function doTheCircularMotion()
{
	context3.clearRect(0, 0, canvas3.width, canvas3.height);
	context3.fillRect(0, 0, canvas3.width, canvas3.height);
	nouveauCercle1.draw();
	setTimeout(doTheMotionY, 60);
}

let nouveauCercle1 = new Cercle3("blue",25);
setTimeout(doTheCircularMotion, 150);
