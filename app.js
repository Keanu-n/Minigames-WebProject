/* zwischen den verschiedenen elementen wechseln und das in der url anzeigen */
function myFunction() {
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}