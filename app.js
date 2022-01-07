// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//function to open a tab
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // alle Elemente von "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // alle Elemente von "tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Tab anzeigen
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//function to prepare for banana game
var id = 0;

function banana() {
    document.getElementById("bananaAnimation2").style.display = "block";
    var elem = document.getElementById("bananaAnimation2");
    var pos = 0;

    clearInterval(id);
    id = setInterval(frame, 10);


    function frame() {

        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function symbolsHide() {
    var images;
    images = document.getElementsByClassName("symbolPictures");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
}

function symbol() {
    var images;
    images = document.getElementsByClassName("symbolPictures");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
}

var count = 0;
var start = false;

function clickGameStart() {
    count = 0;
    start = true;
    document.getElementById("ClickCounter").innerHTML = count;
}

function incrementCount() {
    if (start == true) {
        count++;
        document.getElementById("ClickCounter").innerHTML = count + " mal geklicked, weiter so!";
    }
}