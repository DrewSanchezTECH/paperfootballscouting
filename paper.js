var fg;
var fpPossibble;

var ep;
var epPossible;

var made = 0;
var attempt = 0;

function made(){
	made += 1;
	attempt += 1;
}

function miss() {
	attempt += 1;
}

function fgMade() {
	fg += 1;
	fgPossible += 1;
}


function openCity(evt, cityName) {
	
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}