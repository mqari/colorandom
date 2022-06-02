let paletteEl = document.querySelector(".palette");
let buttonsEl = document.querySelector(".buttons");
let newPaletteButtonEl = document.querySelector(".new-palette-button");
let savePaletteButtonEl = document.querySelector(".save-palette-button");
let savedPalettesSection = document.querySelector(".saved-palettes");

let palette = new Palette();
let savedPalettes = [];

newPaletteButtonEl.addEventListener("click", () =>
    palette.generateNewPalette()
);

savePaletteButtonEl.addEventListener("click", () => {

    savedPalettes.push(palette.colors.map(color => {
        return {...color }
    }));


    savedPalettesSection.innerHTML = "";
    savedPalettes.forEach((palette) => {
        savedPalettesSection.innerHTML += `
    <div style="display: flex; justify-content: space-around"> 
    <div style="border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[0].color}">
    
    </div>
    <div style="border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[1].color}">
    
    </div>
    <div style="border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[2].color}">
    
    </div>
    <div style="border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[3].color}">
    
    </div>
    <div style="border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[4].color}">
    
    </div>
    <img src="assets/images/delete.png">
    </div>

    `;
    });
    //generateNewPalette()
});