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
var id1 = 0;

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

var pos1 = 0;


function move(event) {
    var x = event.key;

    if (x == "Shift") {
        document.getElementById("bananaAnimation").style.display = "block";
        var pos = 0;
        document.getElementById("bananaAnimation").style.left = pos
        clearInterval(id1);
    } else {
        if (x == "ArrowRight") {
            var elem = document.getElementById("bananaAnimation");
            var pos = pos1

            clearInterval(id1);
            id1 = setInterval(moveRight, 10);

            function moveRight() {

                if (pos == 400) {
                    clearInterval(id1);
                } else {
                    document.getElementById("anzeige").innerHTML = pos1
                    var pos1 = pos1 + "1";
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
        } else {
            clearInterval(id1);
        }
    }
}