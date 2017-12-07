// Vi skapar ett rutnät av rader och kolumner som är 10 rader högt och 10 kolumner på bredden
const rows = 10;
const cols = 10;

// Storleken på varje ruta i nätet sätter är 50px, vilket vi behöver för att kunna räkna.
const squareSize = 50;

// Hämta ut spelbrädet
let gameBoard = document.getElementById("grid");

// Skapa rutnätet med rader och kolumner (tips: det kommer krävas två nästlade for-loopar här)
// En som loopar över antalet kolumner och en inre som loopar över antalet rader.
for (c = 0; c < cols; c++) {
    for (r = 0; r < rows; r++) {
    // Koden nedan ska ligga inuti den innersta for-loopen

    // Skapa ett div-element med document.createElement för varje ruta i rutnätet

    // Lägg till rutan i rutnätet med appendChild()

    // Ge varje element ett unikt id baserat på rad och kolumn. Exempelvis r00
    // för en ruta på rad 0 och kolumn 0. Id:t kan sättas med direkt på elementet med
    // antingen element.id eller setAttribute()

    // Vi behöver en referens till koordinaten för rutan i rutnätet. Den får vi via följande:
    //
    // Positionen från toppen är den nuvarande raden i for-loopen för rader multiplicerat med squareSize
    // Positionen från vänster är den nuvarande raden i for-loopen kolumner multiplicerat med squareSize

    // Använd sedan CSS för att absolut positionera varje ruta på sidan.
    // square.style.top = ? <--- koordinaten från rad 27 här + "px";
    // square.style.left = ? <--- koordniaten från rad 28 här + "px";
  }
}

// Koden nedan för ska inte ligga innanför någon loop

/*
* För att kolla i fall man har vunnit gör vi en enkel räknare som håller holl på antal gissningar.
* Enligt reglerna har man vunnit när man gissat rätt 17 gånger:
*
*     Kryssare    - 5 träffar
*     Slagskepp   - 4 träffar
*     Jagare      - 3 träffar
*     U-båt       - 3 träffar
*     Patrullbåt  - 2 träffar
*
*/

let hits = 0;

/**
 * Här är ett exempel på en två-dimensionell array som kan användas för att illustrera
 * hur spelet pågår.
 *
 * 0 = tomt, 1 = del av en båt/skepp, 2 = träff på skepp, 3 = miss
 */
let gameGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
];

// Skapa eventlyssnare för alla element i rutnätet och kör funktionen guess när en ruta klickas på
// Tips: addEventListener()

function guess(e) {

  // Här är en koll som avgör i fall det som tryckts på är en ruta i rutnätet och inte rutnätet i sig
  if (e.target !== e.currentTarget) {

    // Hämta ur rad och kolumn nummer från HTML-elementets ID (tips använd substring() för att hämta ut delar av en sträng)

    // let row = ?
    // let col = ?

    /*
    * Nu behövs det göras en if-sats
    *
    * I if-satsen ska det kollas på tre påståenden:
    *
    * Påstående 1: Om spelaren har klickat på en ruta utan ett skepp (alltså 0)
    * Påstående 2: Om spelaren har klickat på en ruta med ett skepp (alltså 1)
    * Påstående 2a (nästlad inuti 2): Om värdet av hits är lika med 17, så har man vunnit
    * Påstående 3: Om spelaren har klickat på en ruta som redan är träffad (alltså 3)
    *
    * if (påstående 1) {
    *   // Ändra background på denna ruta till typ "gray"
    *   // Sätt denna rutas värde till 3
    * } else if (påstående 2) {
    *   // Ändra background på denna ruta till "red"
    *   // Ändra denna rutas värde till 2
    *   // Öka värdet av hits med 1
    *   if (påstående 2a) {
    *       // Gör en alert() eller visa ett meddelande på sidan så spelaren vet att hen har vunnit!
    *   }
    * } else if (påstående 3) {
    *       // Gör en alert() eller visa ett meddelande på sidan så användaren vet att hen redan har gissat på den positionen
    * }
    */

  }
  e.stopPropagation();
}
