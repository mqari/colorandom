class Palette {
  constructor(id, colors) {
    this.id = id || this.getId();
    this.colors = colors || this.getPalette();
    this.assignEventListener();
    this.updateDOM();
  }
  getId() {
    return Math.floor(Math.random() * 999999 + 1);
  }

  assignEventListener() {
    var img1 = "assets/images/unlocked.png";
    var img2 = "assets/images/locked.png";
    this.colors.forEach((color, i) => {
      const lockEl = document.querySelector(`#lock-${i + 1}`);
      lockEl.addEventListener("click", () => {
        color.isLocked = !color.isLocked;
        lockEl.src = lockEl.src === img1 ? img2 : img1;
      });
    });
  }

  getPalette() {
    var colorArray = [];
    for (let i = 1; i <= 5; i++) {
      colorArray.push(new Color());
    }
    return colorArray;
  }

  updateDOM() {
    this.colors.forEach(({ color }, i) => {
      const boxEl = document.querySelector(`.color-${i + 1} .color-container`);
      const textEl = document.querySelector(`.color-${i + 1} p span`);

      boxEl.style.background = color;
      textEl.innerHTML = color;
    });
  }

  generateNewPalette() {
    this.colors = this.colors.map((color) => {
      if (!color.isLocked) color.generateColor();
      return color;
    });
    this.updateDOM();
  }
}
