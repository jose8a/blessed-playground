import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class BarChart extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.bar;
  }

  updateData () {
    const arr = []
    for (let i = 0; i < this.data.servers.length; i++) {
      arr.push(Math.round(Math.random()*10))
    }

    this.instance.setData({titles: this.data.servers, data: arr})
  }
}
