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
}

function symbol() {
    var images, i;
    images = document.getElementsByClassName("symbolPictures");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
}

var notClicked = true;
var symbolStar = false,
    symbolVader = false,
    symbolMoon = false,
    symbolTrain = false;

document.getElementById("symbolStar2").onclick = clicked1();
document.getElementById("symbolVader2").onclick = clicked2();
document.getElementById("symbolMoon2").onclick = clicked3();
document.getElementById("symbolTrain2").onclick = clicked4();

function clicked1() {
    notClicked = false;
    symbolStar = true;
}

function clicked2() {
    notClicked = false;
    symbolVader = true;
}

function clicked3() {
    notClicked = false;
    symbolMoon = true;
}

function clicked4() {
    notClicked = false;
    symbolTrain = true;
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
            if (randImage == 0 || randImage == 1) {
                images[0].style.display = "block";
            } else if (randImage == 2) {
                images[1].style.display = "block";
            } else if (randImage == 3) {
                images[2].style.display = "block";
            } else {
                images[3].style.display = "block";
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

//click Game functions

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