import 'zx/globals';
import contrib from 'blessed-contrib';

export class Widget {
  constructor (id, window, coords, options, refreshRate = 1_000) {
    this.id = id;
    this.window = window;
    this.data = {};
    this.refreshRate = refreshRate;
    this.refreshInterval;
    this.coords = coords;
    this.options = options;
    this.instance;

    this.widgetTemplate = contrib.map;
  }

  onTick () {
    this.refreshInterval = setInterval(() => {
      this.updateData();
      this.window.renderScreen();
    }, this.refreshRate);
  }

  initializeData (data) {
    this.data = data;
  }

  register () {
    // register the widget
    // - with the Window it will be placed into.
    // - and, save the handle to the registered widget to
    // - use the returned instance for data-setup and updating
    this.instance = this.window.registerWidget(
      this.id,
      this.coords,
      this.widgetTemplate,
      this.options
    );

    // start off the data updates
    this.onTick();
  }

  enqueueData () {
  }

  updateData () {
  }
}
