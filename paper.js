var fg;
var fpPossibble;

var ep;
var epPossible;

var made = 0;
var attempts = 0;
var n;

var teamName = "";

document.getElementById("fg").click();

function madeTd(){
	if (n == 1) {
	  attempts += 1;
		document.getElementById("fg").click();
		document.getElementById("tdMade").innerHTML = "Made";
	}
	
	else {
		made += 1;
		attempts += 1;
		document.getElementById("tdMade").innerHTML = "Field Goal";
		document.getElementById("tdMiss").innerHTML = "Two Point";
		n = 1;
	}
}

function missTd() {
  attempts += 1;
	if (n == 1) {
		document.getElementById("tp").click();
		document.getElementById("tdMiss").innerHTML = "Miss";
	}
}

function stats() {
  if (attempts == 0) {
    document.getElementById("error").innerHTML = "Error, attempts equal 0. Please add attempt(s).";
  } else {
    var stats = made/attempts;
    document.getElementById("statForTeam").innerHTML = stats;
  }
  
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

function addTeamName() {
   teamName = document.getElementById("tdMiss").innerHTML = "Miss";
}