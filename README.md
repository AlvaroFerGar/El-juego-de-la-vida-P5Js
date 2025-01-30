# 🎨 The game of colors 🎨

![Init gif](assets/start.gif)
Try it [here](https://alvarofergar.github.io/El-juego-de-la-vida-P5Js/)


This project is a fork of [Mario Roos Hoefgeest's implementation](https://github.com/mariorht/El-juego-de-la-vida-P5Js) of John Conway's "Game of Life," using the p5.js library. Kudos to my friend and colleague Mario 🤙

# 🦠 Changes to the original Game of Life.

* Cells inherit **colors** from their neighbors based on probability.
* The most common neighboring color has the highest chance of being inherited.
* Each neighbor contributes equally (1/8 weight) to color calculations.

* **Modified survival rules:** living cells need 3/8 neighbors to *maybe* change its color.
* **Modified survival rules:** once a cell is alive it wouldn't die, it will only change colors.
* **Modified birth rules:** dead cells need 1/8 neighbors to *maybe* came alive.
* **Border cells** affect diagonal connections and neighborhood calculations

# 🕹️ How to play

Configure your canvas with *RESTART*, *CLEAR* and the different brushes.
Use the *PLAY* and *PAUSE* buttons to control the game, adjusting the game speed using the slider.


## 🗂️ Project Structure

-`index.html`: Main HTML file that loads the p5.js script and JavaScript files.

-`initcells`: Contains an array of initial position to the default cells

-`clases.js`: Contains the Cell and Population classes, representing individual cells and the cell population, respectively.

-`sketch.js`: Includes the setup and draw functions from p5.js, as well as user interaction logic.

-`p5.min.js`: The p5.js library.

-`README.md`: This humble file.

## 👥 Credits

* **Original Implementation:** [Mario Roos Hoefgeest Toribio](https://github.com/mariorht)
* **Based on:** [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
* **Built with:** [p5.js](https://p5js.org/)
