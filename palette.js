class Palette {
  constructor(id, colors) {
    this.id = id || this.getId()
    this.colors = colors || this.getPalette()
    this.assignEventListener()
  }
  getId() {
    return Math.floor(Math.random() * 999999 + 1)
  }

  assignEventListener() {
    this.colors.forEach((color, i) => {
      const lockEl = document.querySelector(`#lock-${i+1}`)
      lockEl.addEventListener('click', () => {
        color.isLocked = !color.isLocked
        console.log(color)
      })
    });


  }

  getPalette() {
    var colorArray = [];
    for (let i = 1; i <= 5; i++) {
      colorArray.push(new Color())
    }
    return colorArray

  };
}
