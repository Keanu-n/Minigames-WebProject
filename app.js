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
    document.getElementById("anzeige").innerHTML=" "
    var elem = document.getElementById("bananaAnimation2");
    var left=Math.random();
        left=left*300;             
    document.getElementById("bananaAnimation2").style.left=left+"px";
    var pos3 = 0       
    document.getElementById("bananaAnimation2").style.top = pos3

    clearInterval(id);
    id = setInterval(frame, 10);


    function frame() {

        if (pos3 == 400) {
          clearInterval(id);
          if (document.getElementById("bananaAnimation").style.left = document.getElementById("bananaAnimation2").style.left) {
            document.getElementById("anzeige").innerHTML="<strong>YOU WIN!</strong>"
         }
            } else {
                
             pos3++;
            document.getElementById("bananaAnimation2").style.top = pos3 + 'px';
            }
        }
    
}

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
            var pos = 0

            clearInterval(id1);
            id1 = setInterval(moveRight, 10);

            function moveRight() {

                if (pos == 400) {
                    clearInterval(id1);
                } else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
        } else {
            clearInterval(id1);
        }
    }
}