import { Canvas } from "./Canvas.js";
import { Helper } from "./DrawingHelpers.js";
import { Console } from "../Console/main.js";

const con = new Console();

export class Renderer {
  constructor(max) {
    this.ctx = 0;
    this.canvas = 0;
    this.helper = 0;
    this.maxw = max.w;
    this.maxh = max.h;
  }
  _init_(dom) {
    return new Promise((resolve, reject) => {
      try {
        let canvas = new Canvas(dom, this);
        canvas._init_();
        const ctx = canvas.ctx;
        let drawingHelper = new Helper(canvas);
        canvas.c.classList.add("game");
        drawingHelper.resizeSet(this);

        this.ctx = ctx;
        this.canvas = canvas;
        this.helper = drawingHelper;
        con.data("Set data in renderer");

        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
