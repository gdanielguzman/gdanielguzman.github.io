function windchill() {
    var t = parseFloat(document.getElementById("temperature").innerHTML);
    var s = parseFloat(document.getElementById("windSpeed").innerHTML);
    
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

    if(t < 50 || s > 3) {
        document.getElementById("windchill").innerHTML = f.toFixed(1) + "ºF";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
  
    
};
