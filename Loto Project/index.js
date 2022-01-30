var usedNums = new Array(25);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 5; i++) {  //<--always this code for loops. change in red
		setSquare(i,10,1);
	}
    for(var i=5; i < 10; i++) {  //<--always this code for loops. change in red
		setSquare(i,20,11);
	}
    for(var i=10; i < 15; i++) {  //<--always this code for loops. change in red
		setSquare(i,30,21);
	}
    for(var i=15; i < 20; i++) {  //<--always this code for loops. change in red
		setSquare(i,40,31);
	}
    for(var i=20; i < 25; i++) {  //<--always this code for loops. change in red
		setSquare(i,50,41);
	}
}

function setSquare(thisSquare,x,y) {
	var currSquare = "square"+thisSquare;
	var newNum;
	do {
		newNum = getNewNum(x,y);
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum(x,y) {
	return Math.floor(Math.random() * (x-y+1) ) + y;
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {  
	usedNums[i] = false;
	}
	
	newCard();
}
