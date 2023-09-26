class Collision {
  constructor({players}) {
    this.players = players;
    this.isCollision = false;
  }

  areObjectsColliding(object1, object2) {
    return (
      object1?.position?.x < object2?.position.x + object2?.playerWidth &&
      object1?.position?.x + object1?.playerWidth > object2?.position.x &&
      object1?.position?.y < object2?.position?.y + object2?.playerHeight &&
      object1?.position?.y + object1?.playerHeight > object2?.position?.x
    );
  }

  //Detect if there is any collision between given players
  detectCollisions() {
    for (let i = 0; i <= this.players.length; i++) {
      for (let j = i + 1; j <= this.players.length; j++) {
        if (this.areObjectsColliding(this.players[i], this.players[j])) {
          this.isCollision = true;

          //Waith for a while.
          setTimeout(() => {
            this.isCollision = false;
          }, [300]);
        }
      }
    }
  }
}
