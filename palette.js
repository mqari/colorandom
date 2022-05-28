class Palette {
  constructor(id, color) {
    this.id = this.getId()
    this.colors = [color1El, color2El, color3El, color4El, color5El]
  }
  getId() {
    Math.floor(Math.random() * 999999 + 1)
  }
  getPalette() {
    for (var i = 0; i < this.colors.length; i++) {
      let colorEl = this.colors[i]
      if (!isLocked) {
        colorEl = new Color
      }
    }
    lockEl.addEventListener('click', lockColor(e))
      if (e.target.id === 'lock-1') {
        color1El.isLocked = true;
      } else if (e.target.id === 'lock-2') {
        color2El.isLocked = true;
      } else if (e.target.id === 'lock-3') {
        color3El.isLocked = true;
      } else if (e.target.id === 'lock-4') {
        color4El.isLocked = true;
      } else if (e.target.id === 'lock-5') {
        color5El.isLocked = true;
      }
    };


    //isLocked should be changed to true when a lockEl is clicked

  }
  //five random colors and a unique id. we need to replace the colors with new colors and we should be able to lock colors. only unlocked colors should be replaced
  //empty array needs five colors, each with unique id. color: hexValue and then id:
