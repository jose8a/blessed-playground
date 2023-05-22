import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Sparkline extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.sparkline;
  }

  updateData () {
    this.data[0].shift()
    this.data[0].push(Math.random()*5+1)

    this.data[1].shift()
    this.data[1].push(Math.random()*5+1)

    this.instance.setData(
      ['Server1', 'Server2'],
      [this.data[0], this.data[1]]
    )
  }
}
