export const config = {
/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Donut Options
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // - how wide is it? over 5 is best
  self.options.radius = options.radius || 14;

  // - width of the donut
  self.options.arcWidth = options.arcWidth || 4;

  // - padding from the top
  self.options.yPadding = options.yPadding || 2;
  */
  donut: {
    coords: [ 8, 8, 4, 2 ],
    refreshMs: 500,
    options: {
      label: 'Percent Donut',
      radius: 16,
      arcWidth: 4,
      yPadding: 2,
      data: [{label: 'Storage', percent: 87}]
    }
  },

  gauge1: {
    coords: [ 8, 10, 2, 2 ],
    refreshMs: 200,
    options: {
      label: 'Storage',
      percent: [ 80, 20 ]
    }
  },

  gauge2: {
    coords: [ 2, 9, 2, 3 ],
    refreshMs: 200,
    options: {
      label: 'Deployment Progress',
      percent: 80
    }
  },

  sparkline: {
    coords: [ 10, 10, 2, 2 ],
    refreshMs: 1_000,
    options: {
      label: 'Throughput (bits/sec)',
      tags: true,
      style: {
        fg: 'blue',
        titleFg: 'white'
      }
    }
  },

  bars: {
    coords: [ 4, 6, 4, 3 ],
    refreshMs: 2_000,
    options: {
      label: 'Server Utilization (%)',
      barWidth: 4,
      barSpacing: 6,
      xOffset: 2,
      maxHeight: 9
    }
  },

  table: {
    coords: [4, 9, 4, 3 ],
    refreshMs: 3_000,
    options: {
      keys: true,
      fg: 'green',
      label: 'Active Processes',
      columnSpacing: 1,
      columnWidth: [
        24, 10, 10
      ]
    }
  },


/*
 *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * **LCD Options**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * - these options need to be modified depending
 *   on the resulting positioning/size
 *
 * - how wide are the segments in % so that
 *   50% = 0.5
 * > options.segmentWidth =
 *           options.segmentWidth || 0.06;
 *
 * - spacing between the segments in % so that
 *   50% = 0.5
 * > options.segmentInterval =
 *           options.segmentInterval || 0.11;
 *
 * - spacing between the segments in % so that
 *   50% = 0.5
 * > options.strokeWidth =
 *           options.strokeWidth || 0.11;
 *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * **Default display settings**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * - how many elements in the display - or how
 *   many characters can be displayed:
 *
 *     > options.elements = options.elements || 3;
 *
 * - what should be displayed before
 *   anything is set:
 *
 *     > options.display = options.display || 321;
 *
 * - spacing between each element:
 *
 *     > options.elementSpacing =
 *               options.spacing || 4;
 *
 * - how far away from the edges to put
 *   the elements:
 *
 *     > options.elementPadding =
 *               options.padding || 2;
 *
 * - coloring:
 *     > options.color = options.color || "white";
 *
 */
  lcd: {
    coords: [ 0, 9, 2, 3 ],
    refreshMs: 1_500,
    options: {
      label: "LCD Test",
      segmentWidth: 0.06,
      segmentInterval: 0.11,
      strokeWidth: 0.1,
      elements: 5,
      display: 3210,
      elementSpacing: 4,
      elementPadding: 2
    }
  },

  errorsChart: {
    coords: [ 0, 6, 4, 3 ],
    refreshMs: 1_500,
    options: {
      style:{
        line: "red",
        text: "white",
        baseline: "black"
      },
      label: 'Errors Rate',
      maxY: 60,
      showLegend: true
    }
  },

  transactions: {
    coords: [ 0, 0, 6, 6 ],
    refreshMs: 500,
    options: {
      showNthLabel: 5,
      maxY: 100,
      label: 'Total Transactions',
      showLegend: true,
      legend: {
        width: 10
      }
    }
  },

  map: {
    coords: [ 6, 0, 6, 6 ],
    refreshMs: 1_000,
    options: {
      label: 'Servers Location'
    }
  },

  log: {
    coords: [ 8, 6, 4, 2 ],
    refreshMs: 500,
    options: {
      fg: "green",
      selectedFg: "green",
      label: 'Server Log'
    }
  },
}
