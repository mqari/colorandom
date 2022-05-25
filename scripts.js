let palette = document.querySelector(".palette");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
let color4 = document.querySelector(".color-4");
let color5 = document.querySelector("color-5");
let buttons = document.querySelector(".buttons");
let newPaletteButton = document.querySelector(".new-palette-button");
let savePaletteButton = document.querySelector(".save-palette-button");

class Color {
  constructor() {
    this.isLocked = false;
    this.color = color;
  }

  getHex() {
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
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    this.color = color;
  }
}
