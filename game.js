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
const testKeyboard = new Keyboard({
  keymap: {
    g: 'backward',
    j: 'forward',
    y: 'jump',
    h: 'bend',
  },
});
testKeyboard.listener();

const player = new Player({
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
  colors: {
    underAttack: 'pink',
    idle: 'red',
  },
});

const enemy = new Player({
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
  isCollision: false,
  colors: {
    underAttack: 'red',
    idle: 'yellow',
  },
});

const test = new Player({
  c: c,
  position: {x: 200, y: 100},
  velocity: {y: 10, x: 10},
  canvas: canvas,
  gravity: gravity,
  keyboard: testKeyboard,
  color: 'yellow',
  attackBox: {
    height: 50,
    width: 100,
    color: 'green',
  },
  target: player,
  playerWidth: 50,
  playerHrighr: 150,
  isCollision: false,
  colors: {
    underAttack: 'red',
    idle: 'yellow',
  },
});

const collusionOfPlayerAndEnemy = new Collision({players: [player, enemy]});
const collusionOfBulletAndEnemy = new Collision({players: [test, enemy]});

//Animation
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';

  c.fillRect(0, 0, canvas.width, canvas.height);
  collusionOfPlayerAndEnemy.detectCollisions();
  collusionOfBulletAndEnemy.detectCollisions();

  player.update({isCollision: collusionOfPlayerAndEnemy.isCollision});
  enemy.update({isCollision: collusionOfPlayerAndEnemy.isCollision});
  test.update({isCollision: collusionOfBulletAndEnemy.isCollision});
}

animate();
