class Celula {
  constructor(x, y, color) {
    this.posX = x;
    this.posY = y;

    this.color = color;

    this.viva = 0;

  }

  draw() {
    if (this.viva) {
      const color_array = string2color(this.color);

      fill(color_array[0], color_array[1], color_array[2]);
      stroke(0);
      rect(this.posX * grid_size, this.posY * grid_size, grid_size, grid_size);
    }
  }

  nace() {
    this.viva = 1;
  }
  muere() {
    this.viva = 0;
  }
  estaViva() {
    return this.viva;
  }

  setColor(color) {
    this.color = color;
  }
  cambiaEstado() {
    if (this.viva == 1) this.muere();
    else this.nace();
  }
}

class Poblacion {
  constructor(default_color = "red") {
    this.celulas = [];
    this.deco_cells=true;
    this.default_color=default_color;

    for (var y = 0; y < height_canvas; y++)
      for (var x = 0; x < width_canvas; x++)
        this.celulas.push(new Celula(x, y, default_color));

    this.poblacionInicial();
  }
  getCelulas()
  {
    return this.celulas;
  }

  getCelula(x, y) {
    return this.celulas[x + y * width_canvas];
  }

  draw() {
    for (var celula of this.celulas) celula.draw();
  }

  clear(){
    for (var celula of this.celulas)
    {
      celula.color=this.default_color;
      celula.muere();
    }
  }

  // Definición de letras en formato de matriz 5x7

  
  drawLetter(letter, startX, startY) {


    const pixelFont = {
      'L': [
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1]
      ],
      'I': [
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0]
      ],
      'F': [
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0]
        
      ],
      'E': [
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1]
      ]
    };

    const letterData = pixelFont[letter];
    if (!letterData) return;
  
    for (let y = 0; y < letterData.length; y++) {
      for (let x = 0; x < letterData[y].length; x++) {
        if (letterData[y][x] === 1) {
          const posX = startX + x;
          const posY = startY + y;
          this.getCelula(posX, posY).color = "border";
          this.getCelula(posX, posY).nace();
        }
      }
    }
  }
  
  drawText(text, startX, startY) {
    const spacing = 17; // Espacio entre letras
    let currentX = startX;
    
    for (let i = 0; i < text.length; i++) {
      this.drawLetter(text[i], currentX, startY);
      currentX += spacing;
    }
  }

  poblacionInicial() {
    this.clear();

    const centerX=50;
    const centerY=25;

    console.log("ini "+this.deco_cells);
    if(this.deco_cells===true)
    {
    init_cells.forEach((cell) => {
      const [x, y, color] = cell;
      this.getCelula(x, y).color = color;
      this.getCelula(x, y).nace();
    });
    }
    const textStartX = centerX-31;
    const textStartY = centerY-11;    
    this.drawText("LIFE", textStartX, textStartY);
    

    this.deco_cells=!this.deco_cells;
  }

  update() {
    let nuevoColor = [];

    for (var celula of this.celulas) {
      let coloresVecinos = this.calculaColoresVecinos(celula);

      let colorMasRepetido = 0;
      let maxRepeticiones = 0;

      for (let color in coloresVecinos) {
        if (coloresVecinos[color] > maxRepeticiones) {
          maxRepeticiones = coloresVecinos[color];
          colorMasRepetido = color;
        }
      }

      let vecinos_requeridos=3/8;
      if(!celula.estaViva())
        vecinos_requeridos=1/8;

      if (maxRepeticiones >= vecinos_requeridos) {

        let random = Math.random();
        let acumulado = 0;
        let colorElegido = 0;

        // Recorremos sumando hasta superar el número aleatorio
        for (let color in coloresVecinos) {
          acumulado += coloresVecinos[color];
          if (random <= acumulado) {
            colorElegido = color;
            break;
          }
        }

        nuevoColor.push(colorElegido);
      } else {
        nuevoColor.push(0);
      }
    }

    let i = 0;
    for (var celula of this.celulas) {
      if (nuevoColor[i] == 0 || celula.color === "border");
      else {
        //celula.muere();
        celula.color = nuevoColor[i];
        celula.nace();
      }
      i++;
    }
  }

  calculaVecinosVivos(celula) {
    let x = celula.posX;
    let y = celula.posY;

    let NO = x > 0 && y > 0 ? this.getCelula(x - 1, y - 1).estaViva() : 0;
    let N = y > 0 ? this.getCelula(x, y - 1).estaViva() : 0;
    let NE =
      x < width_canvas - 1 && y > 0
        ? this.getCelula(x + 1, y - 1).estaViva()
        : 0;
    let O = x > 0 ? this.getCelula(x - 1, y).estaViva() : 0;
    let E = x < width_canvas - 1 ? this.getCelula(x + 1, y).estaViva() : 0;
    let SO =
      x > 0 && y < height_canvas - 1
        ? this.getCelula(x - 1, y + 1).estaViva()
        : 0;
    let S = y < height_canvas - 1 ? this.getCelula(x, y + 1).estaViva() : 0;
    let SE =
      x < width_canvas - 1 && y < height_canvas - 1
        ? this.getCelula(x + 1, y + 1).estaViva()
        : 0;

    return NO + N + NE + O + E + SO + S + SE;
  }

  calculaColoresVecinos(celula) {
    const movimientos = [
      { dx: -1, dy: -1, condicion: ["N", "O"] }, // NO
      { dx: 0, dy: -1 }, // N
      { dx: 1, dy: -1, condicion: ["N", "E"] }, // NE
      { dx: -1, dy: 0 }, // O
      { dx: 1, dy: 0 }, // E
      { dx: -1, dy: 1, condicion: ["S", "O"] }, // SO
      { dx: 0, dy: 1 }, // S
      { dx: 1, dy: 1, condicion: ["S", "E"] }, // SE
    ];

    const x = celula.posX;
    const y = celula.posY;
    const colores = {};

    for (const mov of movimientos) {
      const newX = x + mov.dx;
      const newY = y + mov.dy;

      //Si celda vecina fuera del canvas, continuamos
      if (
        newX < 0 ||
        newX >= width_canvas ||
        newY < 0 ||
        newY >= height_canvas
      ) {
        continue;
      }

      // Si movimiento diagonal verificamos presencia de bordes
      if (mov.condicion) {
        const [dir1, dir2] = mov.condicion;
        const vecino1 = this.getCelula(
          x + (dir1 === "N" ? 0 : dir1 === "S" ? 0 : dir1 === "O" ? -1 : 1),
          y + (dir1 === "N" ? -1 : dir1 === "S" ? 1 : 0)
        );
        const vecino2 = this.getCelula(
          x + (dir2 === "N" ? 0 : dir2 === "S" ? 0 : dir2 === "O" ? -1 : 1),
          y + (dir2 === "N" ? -1 : dir2 === "S" ? 1 : 0)
        );

        if (
          (vecino1.estaViva() && vecino1.color === "border") ||
          (vecino2.estaViva() && vecino2.color === "border")
        )
          continue; // Saltar este movimiento si no se cumplen las condiciones
      }

      const vecino = this.getCelula(newX, newY);
      if (vecino.estaViva() && vecino.color !== "border") {
        colores[vecino.color] = (colores[vecino.color] || 0) + 1 / 8;
      }
    }

    return colores;
  }
}
