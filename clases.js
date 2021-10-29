class Celula {
    constructor(x, y)
    {
      this.posX = x;
      this.posY = y;
  
      this.viva = 0;
    }
  
    draw()
    {
      if(this.viva)  {    
        fill(51);
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

    cambiaEstado(){
        if (this.viva == 1)
            this.muere();
        else
            this.nace();
    }
  }
  
  

class Poblacion {
    constructor() {
        this.celulas = [];
        for(var y=0; y < height_canvas; y++)
            for(var x=0; x < width_canvas;x++)
                this.celulas.push(new Celula(x,y));

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
        let nuevoEstado = [];

        for(var celula of this.celulas) {
            let vecinosVivos = this.calculaVecinosVivos(celula);
            switch(celula.estaViva()) {
                case 0:
                    if(vecinosVivos == 3)
                        nuevoEstado.push(1);
                    else
                        nuevoEstado.push(0);
                    break;
                case 1:
                    if(vecinosVivos == 2 || vecinosVivos == 3)
                        nuevoEstado.push(1);
                    else 
                        nuevoEstado.push(0);
                    break;
            }
        }

        let i = 0;
        for(var celula of this.celulas) {
            if(nuevoEstado[i])
                celula.nace();
            else
                celula.muere();

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
}