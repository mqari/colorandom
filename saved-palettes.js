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
    const element = savedPalettes[i];
    savedPalettesSection.innerHTML += `
    <div style="display: flex; justify-content: space-around;" > 
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${
      element[0].color
    }">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${
      element[1].color
    }">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${
      element[2].color
    }">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${
      element[3].color
    }">
    
    </div>
    <div style="margin-bottom: 20px; border: solid black 1px; width: 25px; height: 25px; background-color: ${
      element[4].color
    }">
    
    </div>
    <img id="${Date.now()}" onClick="deleteSavedPalette(event)" style="height:17px; width:17px" src="assets/images/delete.png">
    </div>

    `;
  }
}

function deleteSavedPalette(event) {
  event.target.parentNode.remove();

  for (let i = 0; i < savedPalettes.length; i++) {
    console.log(savedPalettes[i]);
    if (id === savedPalettes[i].id) {
      savedPalettes.splice(i, 1);
    }
  }
}
