const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
const gravity = 0.2;

c.fillRect(0, 0, canvas.width, canvas.height);

//install Key
const playerKeyboard = new Keyboard({
  keymap: {
    a: 'backward',
    d: 'forward',
    w: 'jump',
    s: 'bend',
  },
});
playerKeyboard.listener();
const enemyKeyboard = new Keyboard({
  keymap: {
    arrowleft: 'backward',
    arrowright: 'forward',
    arrowup: 'jump',
    arrowdown: 'bend',
  },
});

enemyKeyboard.listener();

const player = new Sprite({
  c: c,
  position: {x: 0, y: 0},
  velocity: {y: 10, x: 10},
  canvas: canvas,
  gravity: gravity,
  keyboard: playerKeyboard,
  color: 'red',
  attackBox: {
    color: 'blue',
    height: 50,
    width: 100,
  },
  playerWidth: 50,
  playerHeight: 150,
});

const enemy = new Sprite({
  c: c,
  position: {x: 500, y: 100},
  velocity: {y: 10, x: 10},
  canvas: canvas,
  gravity: gravity,
  keyboard: enemyKeyboard,
  color: 'yellow',
  attackBox: {
    height: 50,
    width: 100,
    color: 'green',
  },
  target: player,
  playerWidth: 50,
  playerHrighr: 150,
});

const collusion = new Collision({objects: [player, enemy]});

//Animation
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';

  c.fillRect(0, 0, canvas.width, canvas.height);
  collusion.detectCollisions();
  if (collusion.isCollision) {
    player.color = 'pink';
    enemy.color = 'orange';
  } else {
    player.color = 'red';
    enemy.color = 'yellow';
  }

  player.update();
  enemy.update();

  //Atacking!
  // if (
  //   player.attackBox.position.x + player.attackBox.width >= enemy.position.y &&
  //   player.attackBox.position.x <= enemy.position.x + enemy.playerWidth &&
  //   player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
  //   player.attackBox.position.y <= enemy.position.y + enemy.height
  // ) {
  //   console.log('ATACK!!!');
  // }
}

animate();
