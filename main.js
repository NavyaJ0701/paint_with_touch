
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "purple";
    width_of_line = 2;

var width=screen.width;

new_width=screen.width-70;
new_height=screen.heigt-300;

if (width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;

    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("colour").value;
        width_of_line = document.getElementById("width_of_line").value;
        
console.log("my_touchstart");

last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;
    }



    canvas.addEventListener("touchmove", navya);
    function navya(e)
    {
console.log("mytouchmove");
         current_position_of_touch_x = e.touches[0].clientX- canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY- canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    

        last_x = current_position_of_touch_x; 
        last_y = current_position_of_touch_y;
    }

