import { Renderer } from "../Renderer/main.js";
import { Rect } from "./Shape/main.js";
import { Controller } from "./Controller/main.js";

const renderer = new Renderer({ w: 500, h: 500 });
(async() => {
    await renderer._init_();
})();

export class Editor {
    constructor() {
            this.renderer = renderer;
            this.ctx = this.renderer.ctx;
            this.canvas = this.renderer.canvas;
            this.canvasColor = "#fff";
            this.helper = this.renderer.helper;
            this.updateInterval = null;
            this.controller = new Controller(this.canvas);
            this.shapes = [];
            this.keyCodes = ["r", "c", "t"];
            this.init();
            this.addRect();
            this.selectedObject = null;
        }
        //gui methods
    addRect() {
            this.shapes.push(
                new Rect({
                    x: 50,
                    y: 50,
                    w: 200,
                    h: 200,
                    fillStyle: "#12f5as",
                    strokeStyle: "#000",
                    globalAlpha: 0.5
                })
            );
        }
        //editor logic
    checkMouseOver() {
            this.shapes.forEach(shape => {
                this.selectedObject = shape.checkMouse(this.controller.mouse);
            });

            this.shapes.every(shape => !shape.hovered) &&
                this.controller.mouse.clicking &&
                this.shapes.forEach(shape => {
                    shape.hovered = false;
                    this.controller.mouse.cursor = "default";
                    shape.selected = false;
                });
        }
        //drawing logic
    clearCanvas() {
        this.helper.clearAll();
    }
    renderBackground() {
        let ctx = this.ctx;

        ctx.save();
        ctx.fillStyle = this.canvasColor;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.restore();
    }
    renderShapes() {
            this.shapes.forEach(shape => {
                shape.render(this.ctx);
            });
        }
        //private methods
    _init() {
        this._initRendering();
        this._initKeys();
        this._initUpdate();
    }
    _initRendering() {
        window.requestAnimationFrame(this._initRendering.bind(this));
        this.clearCanvas();
        this.renderBackground();
        this.renderShapes();
    }
    _initKeys() {
        this.keyCodes.forEach(code => {
            this.controller.addKey(code);
        });
    }
    _initUpdate() {
        this.updateInterval = setInterval(() => {
            this.checkMouseOver();
        });
    }
    init() {
        this._init();
    }
}