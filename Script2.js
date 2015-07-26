var canvas;
		var context;
		var dx = 5;
		var dy = 5;
		var circle=new Circle(350,75,15);
		var timer;
		function Circle(x,y,r){
			this.x=x;
			this.y=y;
			this.r=r;
		}
		function drawBall(c) {
			context.beginPath();
			context.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
			context.fill();
		}
		function init() {
			canvas = document.getElementById("myCanvas");
			context = canvas.getContext("2d");
			timer=setInterval(draw, 10);
			return timer;
		}
		function draw() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "#FAF7F8";
			context.fillRect(0,0,canvas.width,canvas.height);
			context.fillStyle = "blue";
			drawBall(circle);
			if (circle.x + circle.r> canvas.width || circle.x - circle.r < 0)
				dx=-dx;
			if (circle.y + circle.r> canvas.height || circle.y -circle.r < 0)
				dy=-dy;
			circle.x += dx;
			circle.y += dy;
	}