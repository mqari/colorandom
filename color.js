

class Color {
  constructor() {
    this.isLocked = false;
    this.color = this.getHex()
  }

  getHex() {

    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return color
  }
}


let hexValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
