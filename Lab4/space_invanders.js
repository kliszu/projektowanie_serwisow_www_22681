const canvas = document.getElementById('game_pane');
const context = canvas.getContext('2d');
const unit = 15;


class ship {
    constructor () {
        this.color = '#fff';
        this.direction = '';
        this.dead = false;
        this.y = 400;
        this.startY = y;
    }
}

let master_ship = new ship();

function setKey(key, player, left, right, shoot) {
    switch(key) {
        case left:
            player.key = left;
        break;
        case right:
    }
}