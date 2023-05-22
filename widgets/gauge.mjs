import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Gauge extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.gauge;
  }

  updateData () {
    if (this.data.percent > 99) this.data.percent = 0

    this.instance.setData(this.data.percent);
    this.data.percent++;
  }
}
