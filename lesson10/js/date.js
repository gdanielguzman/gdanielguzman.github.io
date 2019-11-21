function currentYear() {
	var today = new Date();
    var year = today.getFullYear();
   	document.getElementById("year").innerHTML = year;
}

function lastUpdate(){
	 /*var modified = document.lastModified;
	 var day = day.lastModified;
	 document.getElementById("updated").innerHTML = day;*/

	var update = new Date();
	var theMonth = update.getMonth();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var theDate = update.getDate();
	var theDay = update.getDay();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var theYear = update.getFullYear();
	document.getElementById("updated").innerHTML = days[theDay] + ", " + theDate + " " + months[theMonth] + " " + theYear;
}

	

function showBanner() {

	var today = new Date();
	var day = today.getDay();
	
	if(day == 5) {
		document.getElementsByClassName("banner")[0].classList.toggle("friday");
	}

    }





	function yearAndUpdate(){
	currentYear();
	lastUpdate();
	showBanner();
}

