class Celula {
    constructor(x, y, color)
    {
      this.posX = x;
      this.posY = y;

      this.color = color;
  
      this.viva = 0;
    }
  
    draw()
    {
      if(this.viva)  {
        console.log(this.color);
        const color_array=string2color(this.color);

        fill(color_array[0], color_array[1], color_array[2]);
        stroke(0)
        rect(this.posX*grid_size, this.posY*grid_size, grid_size, grid_size);
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

    setColor(color)
    {
        this.color=color;
    }
    cambiaEstado(){
        if (this.viva == 1)
            this.muere();
        else
            this.nace();
    }
  }
  
  

class Poblacion {
    constructor(default_color="red") {
        this.celulas = [];
        for(var y=0; y < height_canvas; y++)
            for(var x=0; x < width_canvas;x++)
                this.celulas.push(new Celula(x,y,default_color));

        this.poblacionInicial();
    }

    getCelula(x,y){
        return this.celulas[x + y*width_canvas];
    }

    draw() {
        for(var celula of this.celulas)
            celula.draw();
    }

    poblacionInicial(){
        for(var celula of this.celulas) 
            celula.muere();

        // this.getCelula(10,11).nace();
        // this.getCelula(10,10).nace();
        // this.getCelula(10,9).nace();
        // this.getCelula(9,9).nace();
        // this.getCelula(11,10).nace();

        this.getCelula(10,11).nace();
        this.getCelula(9,11).nace();
        this.getCelula(8,11).nace();
        this.getCelula(10,10).nace();
        this.getCelula(9,9).nace();
    }

    update() {
        let nuevoColor = [];

        for(var celula of this.celulas) {
            let coloresVecinos = this.calculaColoresVecinos(celula);

            let colorMasRepetido = 0;
            let maxRepeticiones = 0;
            
            for(let color in coloresVecinos) {
                if(coloresVecinos[color] > maxRepeticiones) {
                    maxRepeticiones = coloresVecinos[color];
                    colorMasRepetido = color;
                }
            }

            if(maxRepeticiones>=(3/8))
            {              
                //nuevoColor.push(colorMasRepetido);

                let random = Math.random();
                let acumulado = 0;
                let colorElegido = 0;
                
                // Recorremos sumando hasta superar el número aleatorio
                for(let color in coloresVecinos) {
                    acumulado += coloresVecinos[color];
                    if(random <= acumulado) {
                        colorElegido = color;
                        break;
                    }
                }
                
                nuevoColor.push(colorElegido);
            }
            else
            {
                nuevoColor.push(0);
            }
        }


        let i = 0;
        for(var celula of this.celulas) {
            if(nuevoColor[i]==0)
                ;//celula.muere();
            else
            {
                console.log(nuevoColor[i])
                celula.color=nuevoColor[i];
                celula.nace();
            }
            i++;
        }

    }

    calculaVecinosVivos(celula)
    {
        let x = celula.posX;
        let y = celula.posY;

        let NO = (x>0 && y>0)                             ? this.getCelula(x-1, y-1).estaViva() : 0;
        let N  = (y>0)                                    ? this.getCelula(x, y-1).estaViva()   : 0;
        let NE = (x<width_canvas-1 && y>0)                ? this.getCelula(x+1, y-1).estaViva() : 0;
        let O  = (x > 0)                                  ? this.getCelula(x-1, y).estaViva()   : 0;
        let E  = (x<width_canvas-1)                       ? this.getCelula(x+1, y).estaViva()   : 0;
        let SO = (x>0 && y<height_canvas-1)               ? this.getCelula(x-1, y+1).estaViva() : 0;
        let S  = (y<height_canvas-1)                      ? this.getCelula(x, y+1).estaViva()   : 0;
        let SE = (x<width_canvas-1 && y<height_canvas-1)  ? this.getCelula(x+1, y+1).estaViva() : 0;

        return NO + N + NE + O + E + SO + S + SE;
    }

    calculaColoresVecinos(celula) {
            const movimientos = [
                {dx: -1, dy: -1}, // NO
                {dx: 0,  dy: -1}, // N
                {dx: 1,  dy: -1}, // NE
                {dx: -1, dy: 0},  // O
                {dx: 1,  dy: 0},  // E
                {dx: -1, dy: 1},  // SO
                {dx: 0,  dy: 1},  // S
                {dx: 1,  dy: 1}   // SE
            ];
            
            const x = celula.posX;
            const y = celula.posY;
            const colores = {};
            
            for (const mov of movimientos) {
                const newX = x + mov.dx;
                const newY = y + mov.dy;
                
                if (newX >= 0 && newX < width_canvas && 
                    newY >= 0 && newY < height_canvas) {
                    const vecino = this.getCelula(newX, newY);
                    if (vecino.estaViva()) {
                        colores[vecino.color] = (colores[vecino.color] || 0) + 1/8;
                    }
                }
            }
            
            return colores;
        }
}