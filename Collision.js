class Collision {
  constructor({objects}) {
    this.objects = objects;
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

  //Detect if there is any collision between given objects
  detectCollisions() {
    for (let i = 0; i <= this.objects.length; i++) {
      for (let j = i + 1; j <= this.objects.length; j++) {
        if (this.areObjectsColliding(this.objects[i], this.objects[j])) {
          this.isCollision = true;
          setTimeout(() => {
            this.isCollision = false;
          }, [300]);
        }
      }
    }
  }
}
