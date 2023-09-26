class Keyboard {
  constructor({keymap}) {
    this.keymap = keymap;

    this.keysLookUp = {
      a: 'backward',
      w: 'jump',
      d: 'forward',
      s: 'bend',
      arrowleft: 'backward',
      arrowup: 'jump',
      arrowright: 'forward',
      rowdown: 'bend',
    };

    this.currentState = {
      backward: false,
      jump: false,
      forward: false,
      bend: false,
    };
  }

  listener() {
    document.addEventListener('keydown', e => {
      console.log('e.key.toLocaleLowerCase()', e.key.toLocaleLowerCase());
      if (Object.keys(this.keymap).includes(e.key.toLocaleLowerCase())) {
        this.currentState = this.keysLookUp[e.key.toLocaleLowerCase()];
      }
    });
    document.addEventListener('keyup', e => {
      if (Object.keys(this.keymap).includes(e.key.toLocaleLowerCase())) {
        this.currentState = '';
      }
    });
  }
}
