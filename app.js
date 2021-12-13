/* zwischen den verschiedenen elementen wechseln und das in der url anzeigen */
function myFunction(evt, navName) {
    /* Variablen */
    var i, tabcontent, tablinks;

    /* alle Elemente mit class="navcontent" */
    tabcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    /* alle Elemente mit class="navbar" */
    tablinks = document.getElementsByClassName("navbar");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    /* jetztigen tab anzeigen */
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";

    /* responsivness implementieren */
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}