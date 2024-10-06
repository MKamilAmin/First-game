import { Player } from "./js/player.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const player = new Player({ x: 0, y: 0 });
const player2 = new Player({ x: 300, y: 100 });

const keys = {
    d: { pressed: false },
    a: { pressed: false },
};

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "#A3CFA7";
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    player2.update();

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 5;
    } else if (keys.a.pressed) {
        player.velocity.x = -5;
    }
}

animate();

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;
        case "w":
            player.velocity.y = -15;
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
    }
});
