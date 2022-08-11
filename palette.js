class Palette {
  constructor(id, colors) {
    this.id = id || this.getId();
    this.colors = colors || this.getPalette();
    this.assignLockEventListener();
    this.assignInputEventListener();
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
      document.querySelector(`#hexcode-${i}`).addEventListener("keyup", (e) => {

        if (e.key === "Enter" || e.key === "Backspace" || e.key === "ArrowRight" || e.key === "ArrowLeft") return;
        const inputEl = document.querySelector(`#hexcode-${i}`)

        if (e.key !== "#" && !hexValues.includes(e.key.toUpperCase())) {
          const sanatized = inputEl.value.split('').filter(char => hexValues.includes(char.toUpperCase()) || char === '#').join('')
          inputEl.value = sanatized
          alert(
            "This is not a valid hexcode. Please use 6 of the following characters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F"
          );
        } else {

          this.colors[i - 1].color = inputEl.value
          this.updateDOM();
        }

      });
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