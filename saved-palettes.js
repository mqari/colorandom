savePaletteButtonEl.addEventListener("click", () => {
  savedPalettes.push(
    palette.colors.map((color) => {
      return { ...color };
    })
  );
  renderSavedPalettes();
  palette.generateNewPalette();
});

function renderSavedPalettes() {
  savedPalettesSection.innerHTML = "";
  for (let i = 0; i < savedPalettes.length; i++) {
    const palette = savedPalettes[i];
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
    <img id="${palette.id}" onClick="deleteSavedPalette(event)" style="height:17px; width:17px" src="assets/images/delete.png">
    </div>

    `;
  }
}

function deleteSavedPalette(event) {
  alert("I was clicked");
  console.log(event.target);
  // event.target.remove();
  // for (let i = 0; i < savedPalettes.length; i++) {
  //   const element = savedPalettes[i];
  //   if (id === element.id) {
  //     savedPalettes[i].remove();
  //   }
  //   renderSavedPalettes();
  // }
}

//delete palette by clicking trash img

//have the ability to name the individual palette

//create a function to unlock all locks and call function in two places
