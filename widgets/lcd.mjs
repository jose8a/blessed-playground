import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class LCD extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.lcd;
  }

  updateData () {
    const value = Math.round(Math.random() * 100);

    this.instance.setDisplay(value + this.data.text[value%12]);
    this.instance.setOptions({
      color: this.data.colors[value%5],
      elementPadding: 4
    });
  }
}
