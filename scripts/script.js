console.log("hellooo");

/*hamburger menu*/

var openButton = document.querySelector(
  "header>ul>li>button"
); /*geeft aan over welke button het gaat*/
var closeButton = document.querySelector("header>nav button");


/*snoopy timee*/

var startSFX = document.querySelector(
  "section:nth-of-type(3)>ul:last-of-type>li:first-of-type> img:first-of-type"
);
var audioSnoopy = new Audio("./audio/snoopy_sfx.mp3");



/*De actie van het klikken op de knop en welke functie uitgevoerd wordt*/

if (openButton) {
  openButton.onclick = openMenu; /*Als het bestaat, dan wordt het uitgevoerd*/
}

if (closeButton) {
  closeButton.onclick = closeMenu; /*Als het bestaat, dan wordt het uitgevoerd*/
}

if (startSFX) {
  startSFX.onclick = playSFX; /*Als het bestaat, dan wordt het uitgevoerd*/
}



function openMenu() {
  /*Als de functie wordt uitgevoerd gebeurd er....*/
  var deNav = document.querySelector("header nav");
  deNav.classList.add(
    "showMenu"
  ); /*de nav krijgt de class showMenu, dit wordt dan "aangekleed" in css*/
  console.log("Menu Open");
}



function closeMenu() {
  var deNav = document.querySelector("header nav");
  deNav.classList.remove("showMenu");
  console.log("Menu Closed");
}



function playSFX() {
  audioSnoopy.play();
  console.log("Audio is working");
}
