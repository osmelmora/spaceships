export default function canvasBuilder(context) {
  return {
    drawRect(x, y, width, height, color) {
      if (color) context.fillStyle = color;

      context.fillRect(x, y, width, height);
    },
  };
}
