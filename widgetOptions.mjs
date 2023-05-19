export const widgets = {
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
    grid: [ 8, 8, 4, 2 ],
    options: {
      label: 'Percent Donut',
      radius: 16,
      arcWidth: 4,
      yPadding: 2,
      data: [{label: 'Storage', percent: 87}]
    }
  },

  gaugeOne: {
    grid: [ 8, 10, 2, 2 ],
    options: {
      label: 'Storage',
      percent: [ 80, 20 ]
    }
  },

  gaugeTwo: {
    grid: [ 2, 9, 2, 3 ],
    options: {
      label: 'Deployment Progress',
      percent: 80
    }
  },

  sparkline: {
    grid: [ 10, 10, 2, 2 ],
    options: {
      label: 'Throughput (bits/sec)',
      tags: true,
      style: {
        fg: 'blue',
        titleFg: 'white'
      }
    }
  },

  bar: {
    grid: [ 4, 6, 4, 3 ],
    options: {
      label: 'Server Utilization (%)',
      barWidth: 4,
      barSpacing: 6,
      xOffset: 2,
      maxHeight: 9
    }
  },

  table: {
    grid: [4, 9, 4, 3 ],
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
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // **LCD Options**
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //these options need to be modified depending on the
  //resulting positioning/size

  // - how wide are the segments in % so 50% = 0.5
  options.segmentWidth = options.segmentWidth || 0.06;

  // - spacing between the segments in % so 50% = 0.5
  options.segmentInterval = options.segmentInterval || 0.11;

  // - spacing between the segments in % so 50% = 0.5
  options.strokeWidth = options.strokeWidth || 0.11;

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // **Default display settings**
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // - how many elements in the display. or how many
  // ... characters can be displayed.
  options.elements = options.elements || 3;

  // - what should be displayed before anything is set
  options.display = options.display || 321;

  // - spacing between each element
  options.elementSpacing = options.spacing || 4;

  // - how far away from the edges to put the elements
  options.elementPadding = options.padding || 2;

  // - coloring
  options.color = options.color || "white";
*/
  lcdLineOne: {
    grid: [ 0, 9, 2, 3 ],
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

  errorsLine: {
    grid: [ 0, 6, 4, 3 ],
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

  transactionLine: {
    grid: [ 0, 0, 6, 6 ],
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
    grid: [ 6, 0, 6, 6 ],
    options: {
      label: 'Servers Location'
    }
  },

  log: {
    grid: [ 8, 6, 4, 2 ],
    options: {
      fg: "green",
      selectedFg: "green",
      label: 'Server Log'
    }
  },
}
