$(document).ready(function() {
	$("#selector").submit(function(event) {
		event.preventDefault();
		var inputSide1 = parseInt($("lengthA").val());
		if (parseInt($("lengthB").val()) < parseInt($("#lengthC").val())) {
			var inputSide3 = parseInt($("#lengthB").val());
			var inputSide2 = parseInt($("#lengthC").val());
		} else {
			var inputSide2 = parseInt($("#lengthB").val());
			var inputSide3 = parseInt($("#lengthC").val());
		}

		var newTriangle = {
			side1: inputSide1,
			side2: inputSide2,
			side3: inputSide3,
			triangleCheck: function(){
				return ((this.side1 + this.side2 > this.side3) && (this.side2 + this.side3 > this.side1) && (this.side1 + this.side3 > this.side2));
			},
			type: function(){
				if(this.side1 === this.side2 && this.side2 === this.side3) {
					return "equilateral";
				} else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
					return "isosceles";
				} else {
					return "scalene";
				}
			},
			area: function(){
				var a = this.side1;
				var b = this.side2;
				var c = this.side3;
				var p = (a + b + c)/2;
				return Math.sqrt(p*(p-a)*(p-b)*(p-c));
			}
			console.log(area);
		}

		$("#numbers").empty().append(newTriangle.area().toFixed(2))

	// De inserat cumva tipul de triunghi in text html

	    // if (!newTriangle.triangleCheck()) {
		// 	alert("Please enter a valid triangle!");
		// } else {
		// 	$("li").removeClass("selected");
		// 	$("ul#"+ newTriangle.type()).append("<li class='selected'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3+"</li>");
		// }

		//$("#canvas-container").empty().append("<canvas id='canvas' width=" + right + " height=" + up +"></canvas>")

		var a2 = newTriangle.side1*10;
		var b2 = newTriangle.side2*10;
		var c2 = newTriangle.side3*10;

		var triangleDraw = function(a, b, c) {
			var canvas=document.getElementById('myCanvas');
			var ctx=canvas.getContext('2d');
			var x = (Math.pow(b, 2) + Math.pow(a,2) - Math.pow(c, 2))/(2*a);
			var y = Math.sqrt(Math.pow(b, 2) - Math.pow(x, 2));

			ctx.beginPath();
			ctx.moveTo(realign,0);
			ctx.lineTo(a + realign, 0);
			ctx.lineTo(x + realign,y);
			ctx.lineTo(realign,0);
			ctx.globalAlpha = .5;
			ctx.fillStyle = 'blue';
			ctx.fill();
			ctx.lineWidth = 4;
			ctx.strokeStyle = 'black';
			ctx.stroke();
		};
		triangleDraw(a2, b2, c2);
	})
});