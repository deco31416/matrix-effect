export default class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = "DECO31416.com "; // Cadena de caracteres
    this.x = x; // Posición en el eje X (columna fija)
    this.y = y; // Posición inicial en el eje Y
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
    this.index = Math.floor(Math.random() * this.characters.length); // Índice inicial aleatorio
  }

  draw(context) {
    // Obtener el carácter actual en orden
    this.text = this.characters.charAt(this.index);
    // Dibujar el texto
    context.textAlign = "center";
    context.font = this.fontSize + "px monospace";
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
  }

  update() {
    // Incrementar el índice para recorrer los caracteres en orden
    this.index = (this.index + 1) % this.characters.length;

    // Si la posición Y supera la altura del canvas, reiniciarla
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0; // Reinicia en la parte superior
      this.index = Math.floor(Math.random() * this.characters.length); // Reinicia con un índice aleatorio
    } else {
      this.y += 1; // Incrementa la posición en el eje Y
    }
  }
}
