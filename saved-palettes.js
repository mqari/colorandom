savePaletteButtonEl.addEventListener("click", () => {
  savedPalettes.push(
    palette.colors.map((color) => {
      return { ...color };
    })
  );

  savedPalettesSection.innerHTML = "";
  savedPalettes.forEach((palette) => {
    savedPalettesSection.innerHTML += `
    <div style="display: flex; justify-content: space-around;" > 
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[0].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[1].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[2].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[3].color}">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${palette[4].color}">
    
    </div>
    <img id="${palette.id}" onClick="deleteSavedPalette(this.id)" style="height:17px; width:17px" src="assets/images/delete.png">
    </div>

    `;
  });
  palette.generateNewPalette();
});

function deleteSavedPalette(id) {
  for (let i = 0; i < savedPalettes.length; i++) {
    const element = savedPalettes[i];
    if (id === element.id) {
      savedPalettes.splice(i, 1);
    }
    //renderSavedPalettes();
  }
}

//create a function to render the savedPalettes array in the aside so we can call it multiple times

//have the ability to name the individual palette

//create a function to unlock all locks and call function in two places
