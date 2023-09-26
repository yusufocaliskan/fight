class Keyboard {
  constructor({keymap}) {
    this.keymap = keymap;

    this.keysLookUp = {
      a: 'backward',
      w: 'jump',
      d: 'forward',
      s: 'bend',
      g: 'backward',
      y: 'jump',
      j: 'forward',
      h: 'bend',
      arrowleft: 'backward',
      arrowup: 'jump',
      arrowright: 'forward',
      rowdown: 'bend',
      space: 'attack',
    };

    this.currentState = {
      backward: false,
      jump: false,
      forward: false,
      bend: false,
      attack: false,
    };
  }

  listener() {
    document.addEventListener('keydown', e => {
      const key = e.code.toLocaleLowerCase().replace('key', '');
      console.log('KEYY', key);
      if (Object.keys(this.keymap).includes(key)) {
        this.currentState = this.keysLookUp[key];
      }
    });
    document.addEventListener('keyup', e => {
      const key = e.code.toLocaleLowerCase().replace('key', '');
      if (Object.keys(this.keymap).includes(key)) {
        this.currentState = '';
      }
    });
  }
}
