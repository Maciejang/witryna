function game(name, genre, img) {
    this.Name = name;
    this.Genre = genre;
    this.Img = img;
}

const doomEternal = new game("Doom Eternal", "FPS", "DoomEternal.png");
const RingFitAdventure = new game("Ring fit adventure", "Sportowe", "RingFitAdventure.png");
const Persona = new game("Persona", "JRPG", "Persona.png");
const ElderScrollsOnline = new game("The Elder Scrolls Online", "MMORPG", "ElderScrollsOnline.png");
const WarOfMine = new game("The War of Mine", "Survival", "TheWarOFfMine.png");
const LifeIsStrange = new game("Life is Strange", "Przygodowe", "LifeIsStrange.png");
const Sims4 = new game("The Sims 4", "Symulatorowe", "Sims.png");

let gameTab = [doomEternal, RingFitAdventure, Persona, ElderScrollsOnline, WarOfMine, LifeIsStrange, Sims4];

let rand = Math.floor(Math.random()*gameTab.length);

document.querySelector(".gameName").innerHTML = gameTab[rand].Name;
document.querySelector(".gameCategory").innerHTML = gameTab[rand].Genre;
localStorage.setItem("randomGameStore", gameTab[rand].Name);
document.querySelector(".gameLinkSpan").innerHTML = `Link: <a href="game.html">${gameTab[rand].Name}</a>`;