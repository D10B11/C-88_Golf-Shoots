
var canvas=new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_Image_Width = 5;
block_Image_Height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function (Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function (Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
		Canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="YOU HIT THE GOAL!!HURRAY!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=10)
		// Write a code to move ball upward.
		ball_y=ball_y-block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When up pressed,x="+ball_x+" y= "+ball_y);
        Canvas.remove(ball_obj);
        player_update();
		
	}

	function down()
{
    if(ball_y<=450)
    {
        // Write a code to move ball downward.
		ball_y=ball_y+block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When down pressed,x="+ball_x+" y= "+ball_y);
        Canvas.remove(ball_obj);
        player_update();
    }

}

	function left()
	{
		if(ball_x >=5)
		{
			// Write a code to move ball left side.
			ball_x=ball_x-block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When left pressed,x="+ball_x+" y= "+ball_y);
        Canvas.remove(ball_obj);
        player_update();

		}
	}

	function right()
	{
		if(ball_x <=1090)
		{
			// Write a code to move ball right side.
			ball_x=ball_x+block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When right pressed,x="+ball_x+" y= "+ball_y);
        Canvas.remove(ball_obj);
        player_update();

		}
	}
	
}

