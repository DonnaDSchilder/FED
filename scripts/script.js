console.log("hellooo");


/*hamburger menu*/

var openButton = document.querySelector("header>ul>li>button"); /*geeft aan over welke button het gaat*/
var closeButton = document.querySelector("header>nav button");
var startSFX = document.querySelector("section:nth-of-type(3)>ul:last-of-type>li:first-of-type> img:first-of-type");
var snoopyButton = document.querySelector("div>main>nav li:last-of-type>button");

openButton.onclick = openMenu; /*De actie van het klikken op de knop en welke functie uitgevoerd wordt*/
closeButton.onclick = closeMenu;
startSFX.onclick = playAudio;
snoopyButton.onclick = snoopyTheme;

var audioSnoopy =  new Audio("./audio/snoopy_sfx.mp3"); 


function openMenu(){ /*Als de functie wordt uitgevoerd gebeurd er....*/
  var deNav = document.querySelector("header nav"); 
  deNav.classList.add("showMenu"); /*de nav krijgt de class showMenu, dit wordt dan "aangekleed" in css*/
  console.log("Menu Open");
};


function closeMenu() {
  var deNav = document.querySelector("header nav");
  deNav.classList.remove("showMenu");
  console.log("Menu Closed"); 
};


function playAudio(){
  audioSnoopy.play();
  console.log("Audio is working");
};

function snoopyTheme(){
  var deBody = document.querySelector("body");
  deBody.classList.toggle("snoopyBG"); /*schakelt tussen aan het uit?*/
  console.log("Snoopy theme yay");
};

