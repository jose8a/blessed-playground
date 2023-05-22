import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Log extends Widget {
  constructor (...args) {
    super(...args);
    this.widgetTemplate = contrib.log;
  }

  updateData () {
    const rnd = Math.round(Math.random()*2)
    const sizeCmds = this.data.commands.length - 1;
    const sizeServs = this.data.servers.length - 1;
    const randCmds = Math.round(Math.random() * sizeCmds);
    const randServs = Math.round(Math.random() * sizeServs);

    if (rnd==0)
      this.instance.log('starting process ' + this.data.commands[randCmds])
    else if (rnd==1)
      this.instance.log('terminating server ' + this.data.servers[randServs])
    else if (rnd==2)
      this.instance.log('avg. wait time ' + Math.random().toFixed(2))
  }
}
