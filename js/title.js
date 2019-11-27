if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = [ "B", "BA", "BAT", "BATE", "BATEE", "BATEEL","BATEELI", "BATEELI S", "BATEELI SE","BATEELI SEC","BATEELI SECU","BATEELI SECUR","BATEELI SECURI","BATEELI SECURIT","BATEELI SECURITY", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
	
}