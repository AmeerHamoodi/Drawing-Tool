const utils = {
  mouseCollidsRect: (rect, x, y) => {
    console.log(x, y);
    let isCollision = false;
    let left = rect.x,
      right = rect.x + rect.w;
    let top = rect.y,
      bottom = rect.y + rect.h;
    if (right >= x && left <= x && bottom >= y && top <= y) {
      isCollision = rect;
    }
    return isCollision;
  }
};

export { utils };
