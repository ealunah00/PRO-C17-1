//variables globales
var x, y, w, h, v;

class Box {

  //constructor con parametros
  constructor(x, y, w, h, vx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
  }

  //dibujar rectángulo
  show() {
    rect(this.x, this.y, this.w, this.h)
  }

  //mover figura
  move() {
    this.x += this.vx;
  }

  //asignar velocidad a figura
  set_speed(v) {
    this.x += v;
  }

}
