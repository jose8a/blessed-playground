import 'zx/globals';
import blessed from 'blessed';
import contrib from 'blessed-contrib';

export class Window {
  constructor() {
    this.screen = blessed.screen();

    this.grid = new contrib.grid({
      rows: 12,
      cols: 12,
      screen: this.screen
    });

    /**
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * Object to place all of the widgets as
     * members of this object when they are
     * "registered" into this Window
     *
     * Example:
     * this.subgrids = {
     *   "donut": this.grid.set(...args)
     *   "table": this.grid.set(...args)
     *   "log": this.grid.set(...args)
     *   ..etc
     *  }
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    this.subgrids = {}
  }

  // Add a widget to the Window subgrids collection
  // for rendering by the Grid layout component
  registerWidget(widgetName, coords, widgetType, options) {
    this.subgrids[widgetName] = this.grid.set(...coords, widgetType, options);

    return this.subgrids[widgetName];
  }

  setKeyboardShortcuts() {
    this.screen.key(
      ['escape', 'q', 'C-c'],
      () => { return process.exit(0) }
    );
  }

  // Re-attach each of the widgets back onto the grid
  // whenever the screen is re-sized
  onResizeSetScreen() {
    // fixes https://github.com/yaronn/blessed-contrib/issues/10
    this.screen.on('resize', () => {
      for (const widget in this.subgrids) {
        this.subgrid[widget].emit('attach');
      }
    });
  }

  renderScreen() {
    this.screen.render()
  }

  getWidget (widget) {
    return this.subgrids[widget];
  }
}
