import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Donut extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.donut;
  }

  updateData () {
    let color = "green";
    if (this.data.donutPct > 0.99) this.data.donutPct = 0.00;

    if (this.data.donutPct >= 0.25) color = "cyan";
    if (this.data.donutPct >= 0.5) color = "yellow";
    if (this.data.donutPct >= 0.75) color = "red";

    this.instance.setData([{
      percent: parseFloat((this.data.donutPct + 0.00) % 1).toFixed(2),
      label: 'storage',
      color
    }]);

    this.data.donutPct += 0.01;
  }
}
