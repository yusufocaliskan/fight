class Sprite {
  constructor({
    c,
    canvas,
    color,
    attackBox,
    position,
    velocity,
    gravity,
    keyboard,
    playerHeight = 150,
    playerWidth = 50,
  }) {
    this.c = c;
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.playerWidth = playerWidth;
    this.playerHeight = playerHeight;
    this.canvas = canvas;
    this.gravity = gravity;
    this.keyboard = keyboard;
    this.jumpHeight = 6;
    this.maxJumpHeight = 0.4;
    this.attackBox = {
      ...attackBox,
      position: this.position,
    };

    this.color = color;

    //isPlayer attacking?
    this.isAttacking = false;
  }

  draw() {
    //Player color.

    this.c.fillStyle = this.color;
    this.c.fillRect(
      this.position.x,
      this.position.y,
      this.playerWidth,
      this.playerHeight,
    );

    this.c.fillStyle = this.attackBox.color;
    this.c.fillRect(
      this.position.x,
      this.position.y,
      this.attackBox.width,
      this.attackBox.height,
    );
  }

  update() {
    this.draw();

    //Start to down player from sky
    this.position.y += this.velocity.y;

    //then- Stop to moving
    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += this.gravity;
    //console.log('this.keyboard.currentState', this.keyboard.currentState);

    //On Presss Key
    if (this.keyboard.currentState == 'forward') {
      this.position.x += this.velocity.x;
    }
    if (this.keyboard.currentState == 'backward') {
      this.position.x -= this.velocity.x;
    }

    if (this.keyboard.currentState == 'jump') {
      this.velocity.y = -this.jumpHeight;
    }
  }

  atack() {
    this.isAttacking = true;

    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }
}
