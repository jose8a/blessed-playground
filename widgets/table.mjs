import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Table extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.table;
  }

  updateData () {
    const data = [];
    const numCmds = this.data.commands.length;

    for (let i = 0; i < 30; i++) {
      const randIdx = Math.round(Math.random() * (numCmds - 1));

      const row = []
      row.push(this.data.commands[randIdx])
      row.push(Math.round(Math.random()*5))
      row.push(Math.round(Math.random()*100))

      data.push(row)
    }

    this.instance.setData({
      headers: ['Process', 'Cpu (%)', 'Memory'],
      data: data
    });
  }
}
