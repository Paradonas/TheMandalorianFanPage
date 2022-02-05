import {spd, update as updateSnake, draw as drawSnake} from './snake.js';
import {update as updateFood, draw as drawFood} from './apple.js';
import {getSnakeHead, snakeIntersection, score} from './snake.js';
import { oustideGrid} from './grid.js';
import { gameRestart} from './input.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if (confirm('Score: ' + score + '. Press OK to restart. ')) {
        window.location = '/SnakeGameHTML/index.html';
        }
        return;
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);

    if (secondsSinceLastRender < 1 / spd) 
        return;

    lastRenderTime = currentTime;

    update()
    draw()

    if (gameRestart === true)
        gameOver = gameRestart;
    else gameOver = gameOver;
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = oustideGrid(getSnakeHead()) || snakeIntersection()
}