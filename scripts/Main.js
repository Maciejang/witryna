function game(name, genre, img) {
    this.Name = name;
    this.Genre = genre;
    this.Img = img;
}

const doomEternal = new game("Doom Eternal", "FPS", "DoomEternal");
const RingFitAdventure = new game("Ring fit adventure", "Sportowe", "RingFitAdventure");
const Persona = new game("Persona", "JRPG", "Persona");
const ElderScrollsOnline = new game("The Elder Scrolls Online", "MMORPG", "ElderScrollsOnline");
const WarOfMine = new game("The War of Mine", "Survival", "TheWarOFMine");
const LifeIsStrange = new game("Life is Strange", "Przygodowe", "LifeIsStrange");
const Sims4 = new game("The Sims 4", "Symulatorowe", "Sims");

let gameTab = [doomEternal, RingFitAdventure, Persona, ElderScrollsOnline, WarOfMine, LifeIsStrange, Sims4];

let rand = Math.floor(Math.random()*gameTab.length);
document.querySelector(".gameName").innerHTML = gameTab[rand].Name;
document.querySelector(".gameCategory").innerHTML = gameTab[rand].Genre;
document.querySelector(".gameLinkSpan").innerHTML = `Link: <a href="./html/${gameTab[rand].Img}.html">${gameTab[rand].Name}</a>`;

let gameGenre = document.querySelector(".selectGameCategory")

function search(){
    document.querySelector(".searchedGames").innerHTML="";
    for(i = 0; i < gameTab.length; i++){
        if(gameTab[i].Genre == gameGenre.value){
            document.querySelector(".searchedGames").innerHTML += `
            <div class="Game container">
            <span class="gameName">${gameTab[i].Name} </span> <br>
            <span class="gameCategory">${gameTab[i].Genre} </span> <br>
            <span class="gameLinkSpan">Link: <a href="./html/${gameTab[i].Img}.html">${gameTab[i].Name}</a></span><br>
            <img class="searchedImg" src="./images/${gameTab[i].Img}.png" alt="">
        </div>`
        }
    }
}

search();

gameGenre.addEventListener("change", _=>{
    search();
})