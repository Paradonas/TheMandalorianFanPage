const gridSizeX = 40;
const gridSizeY = 20;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridSizeX) +1,
        y: Math.floor(Math.random() * gridSizeY) +1
    };
}

export function oustideGrid(position) {
    return (
        position.x < 1 || position.x > gridSizeX || position.y < 1 || position.y > gridSizeY
    );
}