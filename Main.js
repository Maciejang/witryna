function game(name, genre, img) {
    this.Name = name;
    this.Genre = genre;
    this.Img = img;
}

const doomEternal = new game("Doom Eternal", "FPS", "DoomEternal");
const RingFitAdventure = new game("Ring fit adventure", "Sportowe", "RingFitAdventure");
const Persona = new game("Persona", "JRPG", "Persona");
const ElderScrollsOnline = new game("The Elder Scrolls Online", "MMORPG", "ElderScrollsOnline");
const WarOfMine = new game("The War of Mine", "Survival", "TheWarOFfMine");
const LifeIsStrange = new game("Life is Strange", "Przygodowe", "LifeIsStrange");
const Sims4 = new game("The Sims 4", "Symulatorowe", "Sims");

let gameTab = [doomEternal, RingFitAdventure, Persona, ElderScrollsOnline, WarOfMine, LifeIsStrange, Sims4];

let rand = Math.floor(Math.random()*gameTab.length);
document.querySelector(".gameName").innerHTML = gameTab[rand].Name;
document.querySelector(".gameCategory").innerHTML = gameTab[rand].Genre;
document.querySelector(".gameLinkSpan").innerHTML = `Link: <a href="${gameTab[rand].Img}.html">${gameTab[rand].Name}</a>`;