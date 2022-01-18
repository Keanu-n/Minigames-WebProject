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
          if (document.getElementById("bananaAnimation").style.left == document.getElementById("bananaAnimation2").style.left) {
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

//TicTacToe

//"https://audiotrimmer.com/de/lizenzfreie-musik/"

var btns_active = false, player = 0;
var one1 = false, oneX = 0,
    two1 = false, twoX = 0,
    three1 = false, threeX = 0,
    four1 = false, fourX = 0,
    five1 = false, fiveX = 0,
    six1 = false, sixX = 0,
    seven1 =  false, sevenX = 0,
    eight1 = false, eightX = 0,
    nine1 = false, nineX = 0;

function ticTacToe_start(){
    var buttons;
    buttons = document.getElementsByClassName("tic_btn");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "white";
    }
    document.getElementById("gewinnen1").style.display = "none";
    btns_active = true;

    one1 = false;
    two1 = false;
    three1 = false;
    four1 = false;
    five1 = false;
    six1 = false;
    seven1 = false;
    eight1 = false;
    nine1 = false;

    player = 0;

    //Start button muss verschwinden...
    document.getElementById("aaaaah").style.display = "none";
}

//überprüfen ob schon jemand gewonnen hat (alle Möglichkeiten durchlaufen)
function gewonnen(){
    player = player + 1;
    console.log(player);
    if(oneX == 1 && twoX == 1 && threeX == 1){
        win(1);
    }else if(oneX == 2 && twoX == 2 && threeX == 2){
        win(2);
    }else if(fourX == 1 && fiveX == 1 && sixX == 1){
        win(1);
    }else if(fourX == 2 && fiveX == 2 && sixX == 2){
        win(2);
    }else if(sevenX == 1 && eightX == 1 && nineX == 1){
        win(1);
    }else if(sevenX == 2 && eightX == 2 && nineX == 2){
        win(2);
    }else if(oneX == 1 && fourX == 1 && sevenX == 1){
        win(1);
    }else if(oneX == 2 && fourX == 2 && sevenX == 2){
        win(2);
    }else if(twoX == 1 && fiveX == 1 && eightX == 1){
        win(1);
    }else if(twoX == 2 && fiveX == 2 && eightX == 2){
        win(2);
    }else if(threeX == 1 && sixX == 1 && nineX == 1){
        win(1);
    }else if(threeX == 2 && sixX == 2 && nineX == 2){
        win(2);
    }else if(oneX == 1 && fiveX == 1 && nineX == 1){
        win(1);
    }else if(oneX == 2 && fiveX == 2 && nineX == 2){
        win(2);
    }else if(threeX == 1 && fiveX == 1 && sevenX == 1){
        win(1);
    }else if(threeX == 2 && fiveX == 2 && sevenX == 2){
        win(2);
    }else if(one1 == true && two1 == true && three1 == true && four1 == true &&
            five1 == true && six1 == true && seven1 == true && eight1 == true && nine1 == true){
        win(3);
    }
}

function win(i){
    console.log("gewonnen");
    if(i == 1){
        document.getElementById("gewinnen1").innerHTML ="gelb gewinnt!";
    }else if(i == 2){
        document.getElementById("gewinnen1").innerHTML ="orange gewinnt!";
    }else{
        document.getElementById("gewinnen1").innerHTML ="Unentschieden!";
    }
    document.getElementById("gewinnen1").style.display = "block";
    btns_active = false;
}

function one(){
    if(btns_active == true && one1 == false){
        if(player % 2 == 0){
            document.getElementById("one2").style.backgroundColor = "yellow";
            oneX = 1;
        }else{
            document.getElementById("one2").style.backgroundColor = "orange";
            oneX = 2;
        }
        one1 = true;
        gewonnen();
    }
}

function two(){
    if(btns_active == true && two1 == false){
        if(player % 2 == 0){
            document.getElementById("two2").style.backgroundColor = "yellow";
            twoX = 1;
        }else{
            document.getElementById("two2").style.backgroundColor = "orange";
            twoX = 2;
        }
        two1 = true;
        gewonnen();
    }
}

function three(){
    if(btns_active == true && three1 == false){
        if(player % 2 == 0){
            document.getElementById("three2").style.backgroundColor = "yellow";
            threeX = 1;
        }else{
            document.getElementById("three2").style.backgroundColor = "orange";
            threeX = 2;
        }
        three1 = true;
        gewonnen();
    }
}

function four(){
    if(btns_active == true && four1 == false){
        if(player % 2 == 0){
            document.getElementById("four2").style.backgroundColor = "yellow";
            fourX = 1;
        }else{
            document.getElementById("four2").style.backgroundColor = "orange";
            fourX = 2;
        }
        four1 = true;
        gewonnen();
    }
}

function five(){
    if(btns_active == true && five1 == false){
        if(player % 2 == 0){
            document.getElementById("five2").style.backgroundColor = "yellow";
            fiveX = 1;
        }else{
            document.getElementById("five2").style.backgroundColor = "orange";
            fiveX = 2;
        }
        five1 = true;
        gewonnen();
    }
}

function six(){
    if(btns_active == true && six1 == false){
        if(player % 2 == 0){
            document.getElementById("six2").style.backgroundColor = "yellow";
            sixX = 1;
        }else{
            document.getElementById("six2").style.backgroundColor = "orange";
            sixX = 2;
        }
        six1 = true;
        gewonnen();
    }
}

function seven(){
    if(btns_active == true && seven1 == false){
        if(player % 2 == 0){
            document.getElementById("seven2").style.backgroundColor = "yellow";
            sevenX = 1;
        }else{
            document.getElementById("seven2").style.backgroundColor = "orange";
            sevenX = 2;
        }
        seven1 = true;
        gewonnen();
    }
}

function eight(){
    if(btns_active == true && eight1 == false){
        if(player % 2 == 0){
            document.getElementById("eight2").style.backgroundColor = "yellow";
            eightX = 1;
        }else{
            document.getElementById("eight2").style.backgroundColor = "orange";
            eightX = 2;
        }
        eight1 = true;
        gewonnen();
    }
}

function nine(){
    if(btns_active == true && nine1 == false){
        if(player % 2 == 0){
            document.getElementById("nine2").style.backgroundColor = "yellow";
            nineX = 1;
        }else{
            document.getElementById("nine2").style.backgroundColor = "orange";
            nineX = 2;
        }
        nine1 = true;
        gewonnen();
    }
}

//to do list (source: https://www.w3schools.com/howto/howto_js_todolist.asp)

var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
