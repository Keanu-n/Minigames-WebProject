// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* zwischen den verschiedenen elementen wechseln und das in der url anzeigen */
function myFunction(evt, navName) {
    /* Variablen */
    var i, navcontent, navbar2;

    /* alle Elemente mit class="navcontent" */
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }

    /* alle Elemente mit class="navbar" */
    navbar2 = document.getElementsByClassName("navbar2");
    for (i = 0; i < navbar2.length; i++) {
        navbar2[i].className = navbar2[i].className.replace(" active", "");
    }

    /* jetztigen tab anzeigen */
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";

    /* responsivness implementieren
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    */
}