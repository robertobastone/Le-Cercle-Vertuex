const canvas2 = document.getElementById('toile2');
const context2 = canvas2.getContext('2d');
context2.fillStyle = "#FFFFFF";
context2.fillRect(0, 0, canvas2.width, canvas2.height);

class Cercle2
{
	constructor(color,size)
	{
		this.x = canvas2.width*0.5
		this.y = canvas2.height*0.5
		this.color = color
		this.change = "agrandir"
		this.size = size
	}

	draw()
	{
		context2.beginPath();
		context2.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		context2.stroke();
	}

	toMoveY(speed)
	{
		if( this.y > (canvas.width - this.size ))
		{
			this.change = "amoindrir"
		}
		if(this.y < this.size)
		{
			this.change = "agrandir"
		}
		if(this.change == "amoindrir")
		{
			this.y -= speed
		}
		if(this.change == "agrandir")
		{
			this.y += speed
		}
	}

	toMoveYopposite(speed)
	{
		if( this.y > (canvas.width - this.size ))
		{
			this.change = "agrandir"
		}
		if(this.y < this.size)
		{
			this.change = "amoindrir"
		}
		if(this.change == "agrandir")
		{
			this.y -= speed
		}
		if(this.change == "amoindrir")
		{
			this.y += speed
		}
	}

	toMoveX(speed)
	{
		if( this.x > (canvas.width - this.size ))
		{
			this.change = "amoindrir"
		}
		if(this.x < this.size)
		{
			this.change = "agrandir"
		}
		if(this.change == "amoindrir")
		{
			this.x -= speed
		}
		if(this.change == "agrandir")
		{
			this.x += speed
		}
	}

	toMoveXopposite(speed)
	{
		if( this.x > (canvas.width - this.size ))
		{
			this.change = "agrandir"
		}
		if(this.x < this.size)
		{
			this.change = "amoindrir"
		}
		if(this.change == "agrandir")
		{
			this.x -= speed
		}
		if(this.change == "amoindrir")
		{
			this.x += speed
		}
	}


	toMoveXY(xSpeed,ySpeed)
	{
		this.toMoveX(xSpeed);
		this.toMoveY(ySpeed);
	}

	toMoveXYopposite(xSpeed,ySpeed)
	{
		this.toMoveXopposite(xSpeed);
		this.toMoveYopposite(ySpeed);
	}

	toMoveXYcombo1(xSpeed,ySpeed)
	{
		this.toMoveX(xSpeed);
		this.toMoveYopposite(ySpeed);
	}

	toMoveXYcombo2(xSpeed,ySpeed)
	{
		this.toMoveY(ySpeed);
		this.toMoveXopposite(xSpeed);
	}

}

function doTheMotionY()
{
	context2.clearRect(0, 0, canvas2.width, canvas2.height);
	context2.fillRect(0, 0, canvas2.width, canvas2.height);
	nouveauCercle2.draw();
	nouveauCercle2opposite.draw();
	nouveauCercle2.toMoveY(10);
	nouveauCercle2opposite.toMoveYopposite(10);
	setTimeout(doTheMotionY, 60);
}

function doTheMotionX()
{
	nouveauCercle3.draw();
	nouveauCercle3.toMoveX(10);
	nouveauCercle3opposite.draw();
	nouveauCercle3opposite.toMoveXopposite(10);
	setTimeout(doTheMotionX, 60);
}

function doTheMotionXY()
{
	nouveauCercle1.draw()
	nouveauCercle4.draw();
	nouveauCercle4.toMoveXY(10,10);
	nouveauCercle5.draw();
	nouveauCercle5.toMoveXYopposite(10,10);
	nouveauCercle6.draw();
	nouveauCercle6.toMoveXYcombo1(10,10);
	nouveauCercle7.draw();
	nouveauCercle7.toMoveXYcombo2(10,10);
	setTimeout(doTheMotionXY, 60);
}

let nouveauCercle1 = new Cercle2("blue",25);
let nouveauCercle2 = new Cercle2("blue",25);
let nouveauCercle2opposite = new Cercle2("blue",25);
let nouveauCercle3 = new Cercle2("blue",25);
let nouveauCercle3opposite = new Cercle2("blue",25);
let nouveauCercle4 = new Cercle2("blue",25);
let nouveauCercle5 = new Cercle2("blue",25);
let nouveauCercle6 = new Cercle2("blue",25);
let nouveauCercle7 = new Cercle2("blue",25);
setTimeout(doTheMotionY, 150);
setTimeout(doTheMotionX, 150);
setTimeout(doTheMotionXY, 150);
