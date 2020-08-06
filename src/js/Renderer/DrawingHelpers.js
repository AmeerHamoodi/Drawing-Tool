import { Console } from "../Console/main.js";
const con = new Console();

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(ctx, x, y, width, height, radius) {
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export class Helper {
  constructor(c) {
    this.c = c;
    this.fill = "black";
    this.stroke = "black";
  }
  clearAll() {
    let ctx = this.c.c.getContext("2d");

    ctx.clearRect(0, 0, this.c.width, this.c.height);
  }
  scale(ap, ap1) {
    let ctx = this.c.c.getContext("2d");
    ctx.scale(ap, ap1);
  }
  drawSquare(obj) {
    let ctx = this.c.c.getContext("2d");
    ctx.beginPath();
    ctx.rect(obj.x, obj.y, obj.w, obj.h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  drawCircle(obj) {
    let ctx = this.c.c.getContext("2d");
    ctx.beginPath();
    ctx.globalAlpha = obj.ga;
    ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  fill(color) {
    this.fill = typeof color == "string" ? color : "black";
  }
  stroke(color) {
    this.stroke = typeof color == "string" ? color : "black";
  }
  roundRect(ctx, x, y, width, height, radius) {
    roundRect(ctx, x, y, width, height, radius);
  }
  resizeSet(max) {
    window.onresize = () => {
      this.c.width = max.maxw;
      this.c.height = max.maxh;
      con.data("Resized!");
    };
  }
  drawGrid(cam, w, h) {
    let ap = 1;
    let ctx = this.c.getContext("2d"),
      step = 40 * cam.zoom;
    ctx.beginPath();
    ctx.strokeStyle = "#787878";
    ctx.lineJoin = "miter";
    ctx.lineWidth = 3 * cam.zoom;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 0.5;
    for (let x = 0 - cam.x - w; x <= w; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }

    for (let y = 0 - cam.y - h; y <= h; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
  }
}
