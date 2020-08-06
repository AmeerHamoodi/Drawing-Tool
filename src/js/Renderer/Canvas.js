import { CNS } from ".././Neuron/main.js";

export class Canvas {
  constructor(dom, max) {
    this.dom = typeof dom == "undefined" ? 1 : dom;
    this.c = document.createElement("canvas");
    this.ctx = this.c.getContext("2d");
    this.widthI = max.maxw;
    this.heightI = max.maxh;
  }
  _init_() {
    if (this.dom == 1) {
      document.body.insertBefore(this.c, document.body.firstChild);
    } else {
      this.dom.insertBefore(this.c, this.dom.firstChild);
    }
    this.c.width = this.widthI;
    this.c.height = this.heightI;
  }
  update() {
    this.c.width = this.widthI;
    this.c.height = this.heightI;
  }
  set width(a) {
    CNS.emit("resize");
    this.widthI = a;
    this.update();
  }
  set height(a) {
    CNS.emit("resize");
    this.heightI = a;
    this.update();
  }
  get width() {
    return this.widthI;
  }
  get height() {
    return this.heightI;
  }
}
