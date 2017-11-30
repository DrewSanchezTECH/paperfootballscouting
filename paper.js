var fg;
var fpPossibble;

var ep;
var epPossible;

var made = 0;
var attempt = 0;
var n;

function madeTd(){
	if (n == 1) {
		document.getElementById("fg").click();
	}
	
	else {
		made += 1;
		attempt += 1;
		document.getElementById("tdMade").innerHTML = "Field Goal";
		document.getElementById("tdMiss").innerHTML = "Two Point";
		n = 1;
	}
}

function missTd() {
	attempt += 1;
}


function openTab(evt, cityName) {
	
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
