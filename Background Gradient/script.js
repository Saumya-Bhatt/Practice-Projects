var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var css = document.querySelector("h3");
var body = document.getElementById("body");
var button = document.querySelector("button");



function gradient()
{
    body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
    css.textContent = body.style.background + ";";
}
function randomize()
{
    function display()
    {
        body.style.background = "linear-gradient(to right, " + rgb1 + ", " + rgb2 + " )";
        css.textContent = body.style.background + ";";
        color1.value = hex1;
        color2.value = hex2;
    }
    var random = new Array(6);

    for( var i=0; i<6; i++)
    {
        random[i]=Math.floor(Math.random()*256);
    }

    var rgb1 = "rgb(" + random[0] + "," + random[1] + "," + random[2] + ")";
    var rgb2 = "rgb(" + random[3] + "," + random[4] + "," + random[5] + ")";

    var hex1 = "#"+rgbtohex(random[0])+rgbtohex(random[1])+rgbtohex(random[2]);
    var hex2 = "#"+rgbtohex(random[3])+rgbtohex(random[4])+rgbtohex(random[5]);

    function rgbtohex(num)
    {
        var hex = Number(num).toString(16);
        if(hex.length < 2)
        {
            hex = "0"+hex;
        }
        return hex;
    }
    display();
}


css.textContent = "linear-gradient(to right, rgb(255,0,0), rgb(255, 255, 0));";

color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);
button.addEventListener("click",randomize); 


