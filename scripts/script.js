console.log("hellooo");


/*hamburger menu*/

var openButton = 
document.querySelector("header>ul>li>button"); /*geeft aan over welke button het gaat*/

openButton.onclick = openMenu; /*De actie van het klikken op de knop en welke functie uitgevoerd wordt*/

function openMenu(){ /*Als de functie wordt uitgevoerd gebeurd er....*/
    var deNav = document.querySelector("header nav"); 
    deNav.classList.add("showMenu"); /*de nav krijgt de class showMenu, dit wordt dan "aangekleed" in css*/
}


var closeButton = document.querySelector("header>nav button");

closeButton.onclick = closeMenu;

function closeMenu() {
  var deNav = document.querySelector("header nav");
  deNav.classList.remove("showMenu");
}

console.log("openButton:", openButton);
console.log("closeButton:", closeButton); /*goed om te checken of ze allebei uitgevoerd worden*/
