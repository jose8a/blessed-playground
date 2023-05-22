import 'zx/globals';
import contrib from 'blessed-contrib';
import { Widget } from './widget.mjs';

export class Map extends Widget{
  constructor (...args) {
    super(...args)
    this.widgetTemplate = contrib.map;
  }

  updateData () {
    if (this.data.showMarkers) {
      for (const marker of this.data.markers) {
        this.instance.addMarker(marker);
      }
    }
    else {
      this.instance.clearMarkers()
    }

    this.data.showMarkers = !this.data.showMarkers;
  }
}
