import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class LineChart extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.line;
  }

  /**
   * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   * Utility - for all line-charts
   *  - chart-line scrolling-updating function
   * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  setLineData () {
    for (let i = 0; i < this.data.lines.length; i++) {
      const last = this.data.lines[i].y[this.data.lines[i].y.length - 1]
      const num = Math.max(last + Math.round(Math.random() * 10) - 5, 10)

      this.data.lines[i].y.shift()
      this.data.lines[i].y.push(num)
    }

    this.instance.setData(this.data.lines)
  }


  updateData () {
    this.setLineData();
  }
}
