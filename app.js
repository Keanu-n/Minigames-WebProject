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

//symbol game functions

function symbolsHide() {
    var images, i;
    images = document.getElementsByClassName("symbolPictures");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    setTimeout(symbol, 2000);
}

function symbol() {
    var images, i;
    images = document.getElementsByClassName("symbolPictures");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
}

function symbolGame() {
    var randTime, randImage;
    symbolsHide();
    for (var i = 0; i < 20; i++) {
        randTime = Math.round((Math.random() * 10) + 1);
        randImage = Math.round((Math.random() * 10) / 4);
    }
}

/*
var notClicked = true,
    symbolOpen = false;

var symbolStar = false,
    symbolVader = false,
    symbolMoon = false,
    symbolTrain = false;

function clicked1() {
    if (symbolOpen == true) {
        notClicked = false;
        symbolStar = true;
        symbolOpen = false;
    }
}

function clicked2() {
    if (symbolOpen == true) {
        notClicked = false;
        symbolVader = true;
        symbolOpen = false;
    }
}

function clicked3() {
    if (symbolOpen == true) {
        notClicked = false;
        symbolMoon = true;
        symbolOpen = false;
    }
}

function clicked4() {
    if (symbolOpen == true) {
        notClicked = false;
        symbolTrain = true;
        symbolOpen = false;
    }
}

function symbolGame() {
    var images, i, randTime, randImage, time, count = 0;
    images = document.getElementsByClassName("symbolPictures");

    for (i = 0; i < 20; i++) {
        time = 0;
        randTime = Math.round((Math.random() * 10) + 1);
        randImage = Math.round((Math.random() * 10) / 4);

        setTimeout(moveOn, randTime * 1000);

        function moveOn() {
            symbolOpen = true;
            notClicked = true;

            if (randImage == 0 || randImage == 1) {
                document.getElementById("symbolStar2").style.display = "block";
                toTheFront("symbolStar2");
            } else if (randImage == 2) {
                document.getElementById("symbolVader2").style.display = "block";
                toTheFront("symbolVader2");
            } else if (randImage == 3) {
                document.getElementById("symbolMoon2").style.display = "block";
                toTheFront("symbolMoon2");
            } else {
                document.getElementById("symbolTrain2").style.display = "block";
                toTheFront("symbolTrain2");
            }

            while (notClicked == true) {}

            if (symbolStar == true && (randImage == 1 || randImage == 0)) {
                count++;
            } else if (symbolVader == true && randImage == 2) {
                count++;
            } else if (symbolMoon == true && randImage == 3) {
                count++;
            } else if (symbolTrain == true && randImage == 4) {
                count++;
            }

            document.getElementById("SymbolCounter").innerHTML = count + " Punkte, weiter so!";
            notClicked = true;

            symbolStar = false;
            symbolVader = false;
            symbolMoon = false;
            symbolTrain = false;

            symbolsHide();
        }
    }

}
*/


function toTheFront(id) {
    var obj = document.getElementById(id);
    obj.style.zIndex += 1;
}