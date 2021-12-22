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
var id = null;

function banana() {
    var elem = document.getElementById("bananaAnimation2");
    var pos = 0;
    style.display="block"

    clearInterval(id);
    id = setInterval(frame, 10);
     

    function frame() {

           if (pos == 350) {
                 clearInterval(id);
            } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
       }
    }
}