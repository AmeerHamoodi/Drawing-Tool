import { utils } from "../libs/utils.js";

export class Rect {
    constructor(param = false) {
        this.x = param.x || 0;
        this.y = param.y || 0;
        this.fill = param.fill || true;
        this.stroke = param.fill || false;
        this.uuid = Math.random();
        this.w = param.w || 100;
        this.h = param.h || 100;
        this.globalAlpha = param.globalAlpha || 1;
        this.fillStyle = param.fillStyle || "#000";
        this.strokeStyle = param.strokeStyle || "#000";
        this.selected = false;
        this.hovered = false;
        this.hoveredColor = "#59c275";
        this.clickedColor = "#f03278";
        this.strechPoints = [];
    }
    checkMouse(mouse) {
        if (utils.mouseCollidsRect(this, mouse.x, mouse.y)) {
            if (mouse.clicking) {
                this.selected = true;
                mouse.cursor = "move";
                return this;
            } else {
                this.hovered = true;
                mouse.cursor = "pointer";
                return null;
            }
        } else if (mouse.cursor !== "default") {
            this.hovered = false;
            mouse.cursor = "default";
            return null;
        } else {
            this.hovered = false;
            return null;
        }
    }
    addStrechPoints() {

    }
    updateCtx(ctx) {
        ctx.save();
        ctx.globalAlpha = this.globalAlpha;
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
    }
    hoveredStroke(ctx) {
        this.updateCtx(ctx);
        ctx.strokeStyle = this.hoveredColor;
        ctx.lineWidth = 6;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    clickedStroke(ctx) {
        this.updateCtx(ctx);
        ctx.strokeStyle = this.clickedColor;
        ctx.lineWidth = 6;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
    render(ctx) {
        this.hovered && this.hoveredStroke(ctx);
        this.selected && this.clickedStroke(ctx);
        this.updateCtx(ctx);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        this.fill && ctx.fill();
        this.stroke && ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}