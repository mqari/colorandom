class Palette {
  constructor(id, colors) {
    this.id = id || this.getId();
    this.colors = colors || this.getPalette();
    this.assignLockEventListener();
    this.assignInputEventListener()
    this.updateDOM();
  }
  getId() {
    return Math.floor(Math.random() * 999999 + 1);
  }

  assignLockEventListener() {
    var img1 = "assets/images/unlocked.png";
    var img2 = "assets/images/locked.png";
    this.colors.forEach((color, i) => {
      const lockEl = document.querySelector(`#lock-${i + 1}`);
      lockEl.addEventListener("click", () => {
        color.isLocked = !color.isLocked;
        lockEl.src = color.isLocked ? img2 : img1;
      });
    });
  }

  assignInputEventListener() {
    for (let i = 1; i <= 5; i++) {
      document.querySelector(`#hexcode-${i}`).addEventListener('keyup', (e) => {
        if (e.key !== 'Enter') return
        const color = "#" + document.querySelector(`#hexcode-${i}`).value
        this.colors[i - 1].color = color
        this.updateDOM()
      })
    }
  }


  getPalette() {
    var colorArray = [];
    for (let i = 1; i <= 5; i++) {
      colorArray.push(new Color());
    }
    return colorArray;
  }

  updateDOM() {
    this.colors.forEach(({
      color
    }, i) => {
      const boxEl = document.querySelector(`.color-${i + 1} .color-container`);
      const textEl = document.querySelector(`.color-${i + 1} p input`);

      boxEl.style.background = color;
      textEl.value = color;
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