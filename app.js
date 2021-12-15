// Get the element with id="defaultOpen1" and click on it
document.getElementById("defaultOpen1").click();

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

//Funktion für Banane
var id = 0;

function banana() {
    document.addEventListener('keydown', function(event) {
        if (event.code == 37) {
            bananaLeft();
        } else if (event.code == 39) {
            bananaRight();
        }
    });

    var element = document.getElementById("bananaAnimation2");
    var position = 0;
    clearInterval(id);
    id = setInterval(frame, 10);

    function frame() {
        if (position == 400) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position + 'px';
        }
    }
}

function bananaLeft() {
    var element = document.getElementById("bananaAnimation2");
    element.style.right = (element.getBoundingClientRect() + 1) + 'px';
}

function bananaRight() {
    var element = document.getElementById("bananaAnimation2");
    element.style.left = (element.getBoundingClientRect() + 1) + 'px'
}