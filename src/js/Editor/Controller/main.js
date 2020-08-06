import { CNS } from "../.././Neuron/main.js";

export class Controller {
  constructor(canvas) {
    this.mouse = {
      x: 0,
      y: 0,
      clicking: false,
      cursorType: "default",
      updateCursor: () => {
        document.body.style.cursor = this.mouse.cursorType;
      },
      set cursor(type) {
        console.log("s");
        this.cursorType = type;
        this.updateCursor();
      },
      get cursor() {
        return this.cursorType;
      }
    };
    this.checkKeys = [];
    this.keysObject = {};
    this.canvas = canvas.c;
    this.boundingRect = canvas.c.getBoundingClientRect();
    this.init();
  }
  convertKeyCodeToString(keycode) {
    return String.fromCharCode(
      96 <= keycode && key <= 105 ? keycode - 48 : keycode
    );
  }
  addKey(key) {
    this.keysObject[this.convertKeyCodeToString(key)] = false;
    this.checkKeys.push(key);
  }
  checkClicking() {
    document.addEventListener("mousedown", e => {
      this.mouse.clicking = true;
      this.mouse.x = e.clientX - this.boundingRect.left;
      this.mouse.y = e.clientY - this.boundingRect.top;
    }),
      document.addEventListener("mouseup", e => {
        this.mouse.clicking = false;
        this.mouse.x = e.clientX - this.boundingRect.left;
        this.mouse.y = e.clientY - this.boundingRect.top;
      });
  }
  keys() {
    document.addEventListener("keydown", e => {
      this.checkKeys.forEach(key => {
        this.keysObject[this.convertKeyCodeToString(key)] = e.keyCode == key;
      });
    }),
      document.addEventListener("keyup", e => {
        this.checkKeys.forEach(key => {
          this.keysObject[this.convertKeyCodeToString(key)] =
            e.keyCode == key ? false : true;
        });
      });
  }
  mouseMove() {
    document.addEventListener("mousemove", e => {
      this.mouse.x = e.clientX - this.boundingRect.left;
      this.mouse.y = e.clientY - this.boundingRect.top;
    });
  }
  init() {
    CNS.on("resize", () => {
      this.boundingRect = this.canvas.getBoundingClientRect();
    });
    this.checkClicking();
    this.keys();
    this.mouseMove();
  }
}
