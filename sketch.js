var buttonPlay;
var buttonPause;
var buttonRestart;
var sliderFPS;
var currentColor="red";
var p;
// Variables para el control del arrastre
var isDragging = false;
var visitedCells = new Set();

function setup() {
    grid_size = 20;
    width_canvas = 50;
    height_canvas = 30;
    canvas = createCanvas(width_canvas*grid_size, height_canvas*grid_size);
    
    buttonPlay = createButton("PLAY");
    buttonPlay.mousePressed(play);
    buttonPause = createButton("PAUSE");
    buttonPause.mousePressed(pause);
    buttonRestart = createButton("RESTART");
    buttonRestart.mousePressed(restart);
    
    colorSelector = createSelect();
    colorSelector.position(200, height_canvas*grid_size + 30);
    colorSelector.option('Red', 'red');
    colorSelector.option('Blue', 'blue');
    colorSelector.option('Green', 'green');
    colorSelector.option('Purple', 'purple');
    colorSelector.option('Orange', 'orange');
    colorSelector.option('Border', 'border');
    colorSelector.changed(updateColor);
    
    sliderFPS = createSlider(0, 50, 10);
    sliderFPS.position(10, height_canvas*grid_size + 30);
    sliderFPS.style('width', '150px');
    
    p = new Poblacion;
    frameRate(0);
    background(220);
    drawGrid();
    p.draw();
}

function mousePressed() {
    if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
        isDragging = true;
        visitedCells.clear();
        handleCellChange(mouseX, mouseY);
        return false;
    }
}

function mouseReleased() {
    isDragging = false;
    return false;
}

function mouseDragged() {
    if (isDragging && mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
        handleCellChange(mouseX, mouseY);
        return false;
    }
}

// Función para manejar el cambio de estado de una celda
function handleCellChange(x, y) {
    let gridX = Math.floor(x/grid_size);
    let gridY = Math.floor(y/grid_size);
    let cellKey = `${gridX},${gridY}`;
    
    // Solo ejecutamos viveOmuere si no hemos visitado esta celda en este arrastre
    if (!visitedCells.has(cellKey)) {
        visitedCells.add(cellKey);
        let c = p.getCelula(gridX, gridY);
        c.color = currentColor;
        c.cambiaEstado();
        background(220);
        drawGrid();
        p.draw();
    }
}

function draw() {
  background(220);
  drawGrid();

  p.draw();
  p.update();

  frameRate(sliderFPS.value());
}


function string2color(colorname)
{
  switch(colorname) {
    case 'red':
        return [255, 0, 0];
    case 'blue':
      return [0, 0, 255];
    case 'green':
      return [0, 255, 0];
    case 'purple':
      return [128, 0, 128];
    case 'orange':
      return [255, 165, 0];
    case 'border':
      return [0,0,0];
  }
  return [255,255,255];
}

function updateColor() {
  currentColor = colorSelector.value();
}

function drawGrid() {
  for (var x = 0; x <= width; x += grid_size) {
    for (var y = 0; y <= height; y += grid_size) {
      stroke(51);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}


function play() {
  frameRate(20);
}


function pause() {
  frameRate(0);
}

function restart() {
  p.poblacionInicial();
  background(220);
  drawGrid();
  p.draw();

}

function viveOmuere()
{
  let x = Math.floor(mouseX/grid_size);
  let y = Math.floor(mouseY/grid_size);

  c=p.getCelula(x,y)
  c.color=currentColor;
  c.cambiaEstado();
  background(220);
  drawGrid();
  p.draw()

}