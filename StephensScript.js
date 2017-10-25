var switchCount = 0;
var clicks = false;

function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function rgb(r, g, b)
{
	return ["rgb(",r,",",g,",",b,")"].join("");
}

function colorRand()
{
	for (i = 1; i < 13; i++)
	{
		var temp =  "s" + i;
		document.getElementById(temp).style.backgroundColor = rgb(getRandomInt(0,256), getRandomInt(0,256), getRandomInt(0,256));
	}
}

function sizeRand()
{
	for (i = 1; i < 13; i++)
	{
		var temp =  "s" + i;
		document.getElementById(temp).style.fontSize = getRandomInt(5,51) + "px";
	}
}

function marginRand()
{
	for (i = 1; i < 13; i++)
	{
		var temp =  "s" + i;
		document.getElementById(temp).style.marginTop = "" + getRandomInt(0,251);
		document.getElementById(temp).style.marginBottom = "" + getRandomInt(0,251);
		document.getElementById(temp).style.marginLeft = "" + getRandomInt(0,251);
		document.getElementById(temp).style.marginRight = "" + getRandomInt(0,251);
	}
}

function switchRand()
{
	var counter = 1;
	var shuffled = [12];
	var onclick = [12];
	var copied;

	for (i = 0; i < 12; i++)
	{
		var temp = "s" + (i + 1);
		onclick[i] = document.getElementById(temp).onclick;
	}

	do
	{
		var num = getRandomInt(1,13);
		copied = false;

		for (i = 0; i < 13; i++)
		{
			if(shuffled[i] == num)
			{
					copied = true;
					break;
			}
		}

		if (!copied)
		{
			var temp = "" + num;
			document.getElementById("s" + counter).onclick = onclick[num];
			document.getElementById("s" + counter).innerHTML = "???";
			counter++;
			shuffled[counter] = num;
		}


	} while(counter < 12);

	switchCount++;

	if(switchCount > 3)
	{
		document.getElementById("win").disabled = false;
	}

	document.getElementById("clicks").innerHTML = switchCount;
}

function opacityRand()
{
	for (i = 1; i < 13; i++)
	{
		var temp =  "s" + i;
		document.getElementById(temp).style.opacity = "" + Math.random();
	}
}

function fontColorRand()
{
	for (i = 1; i < 13; i++)
	{
		var temp =  "s" + i;
		document.getElementById(temp).style.color = rgb(getRandomInt(0,255), getRandomInt(0,255), getRandomInt(0,255));
	}
}

function rand()
{
	document.getElementById("s" + getRandomInt(1,11)).click();
}

function allRand()
{

	colorRand();
	sizeRand();
	marginRand();
	document.getElementsByTagName('body')[0].style.backgroundColor = rgb(getRandomInt(0,255), getRandomInt(0,255), getRandomInt(0,255));
	opacityRand();
	fontColorRand();
	toggle();
	switchRand();
}

function toggle()
{
	clicks = !clicks;
	if (clicks)
	{
		document.getElementById("clicks").style.visibility = "visible";
	}

	else
	{
		document.getElementById("clicks").style.visibility = "hidden";
	}
}