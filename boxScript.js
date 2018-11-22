var i=0;
function addBox()
{
	i++;//Increments the box number
	var btn = document.createElement("BUTTON");//Creates a button element in the current web page using document object that serves as a box
    	var t = document.createTextNode(i);//Creates a text node with box number
	if(i%2==1)
	{
		btn.className=i%5==0?"box box5":"box";//Odd boxes are checked if they are multiples of 5 and assigned a class that styles it accordingly
	}
	else
	{
		btn.className=i%5==0?"box boxEven box5":"box boxEven";//Even boxes are checked if they are multiples of 5 and assigned a class that styles it
	}
    	btn.appendChild(t);//Appends the box number to the box
	btn.setAttribute('id',i);//Assigns box number as its ID
    	document.getElementById("boxDiv").appendChild(btn);//Appends box to the stack
	document.getElementById("count").style.fontSize=i+20;//Increases the size of the box number
}
function removeBox()
{
	if(i>0)
	{
		var btn = document.getElementById(i);//Obtains the last box added based on ID which is set to box number
		btn.parentNode.removeChild(btn);//Removes the box
		document.getElementById("count").style.fontSize=i+19;//Decreases the size of the box number	
		i--;//Decrements the box number
	}
}
function boxCount()
{
	document.getElementById("count").innerHTML=i>0?i:"No boxes";//Displays number of boxes in the stack		
}
