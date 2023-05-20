import 'zx/globals';
import blessed from 'blessed';
import contrib from 'blessed-contrib';

import { widgets } from './widgetOptions.mjs';

const data = fs.readJsonSync('./dummyData.json');
class View {
  constructor() {
    this.screen = blessed.screen();

    this.grid = new contrib.grid({
      rows: 12,
      cols: 12,
      screen: this.screen
    });

    this.subgrids = {
      donut: this.grid.set(
        ...widgets.donut.grid,
        contrib.donut,
        widgets.donut.options
      ),

      gaugeOne: this.grid.set(
        ...widgets.gaugeOne.grid,
        contrib.gauge,
        widgets.gaugeOne.options
      ),

      gaugeTwo: this.grid.set(
        ...widgets.gaugeTwo.grid,
        contrib.gauge,
        widgets.gaugeTwo.options
      ),

      sparkline: this.grid.set(
        ...widgets.sparkline.grid,
        contrib.sparkline,
        widgets.sparkline.options
      ),

      bar: this.grid.set(
        ...widgets.bar.grid,
        contrib.bar,
        widgets.bar.options
      ),

      table: this.grid.set(
        ...widgets.table.grid,
        contrib.table,
        widgets.table.options
      ),

      lcdLineOne: this.grid.set(
        ...widgets.lcdLineOne.grid,
        contrib.lcd,
        widgets.lcdLineOne.options
      ),

      errorsLine: this.grid.set(
        ...widgets.errorsLine.grid,
        contrib.line,
        widgets.errorsLine.options
      ),

      transactionLine: this.grid.set(
        ...widgets.transactionLine.grid,
        contrib.line,
        widgets.transactionLine.options
      ),

      map: this.grid.set(
        ...widgets.map.grid,
        contrib.map,
        widgets.map.options
      ),

      log: this.grid.set(
        ...widgets.log.grid,
        contrib.log,
        widgets.log.options
      )
    }
  }

  setKeyboardShortcuts() {
    this.screen.key(
      ['escape', 'q', 'C-c'],
      () => { return process.exit(0) }
    );
  }

  onResizeSetScreen() {
    // fixes https://github.com/yaronn/blessed-contrib/issues/10
    this.screen.on('resize', () => {
      this.subgrids.donut.emit('attach');
      this.subgrids.gaugeOne.emit('attach');
      this.subgrids.gaugeTwo.emit('attach');
      this.subgrids.sparkline.emit('attach');
      this.subgrids.bar.emit('attach');
      this.subgrids.table.emit('attach');
      this.subgrids.lcdLineOne.emit('attach');
      this.subgrids.errorsLine.emit('attach');
      this.subgrids.transactionsLine.emit('attach');
      this.subgrids.map.emit('attach');
      this.subgrids.log.emit('attach');
    });
  }

  renderScreen() {
    this.screen.render()
  }

  getWidget (widget) {
    return this.subgrids[widget];
  }
}


const dash = new View();
dash.setKeyboardShortcuts();
dash.onResizeSetScreen();
dash.renderScreen();


// .....
//set dummy data on gauge
// TODO: replace this w/json data
// let gauge_percent = 0
// TODO: replace this w/json data
// let gauge_percent_two = 0
// .....

const gaugeOne = dash.getWidget("gaugeOne");
const gaugeTwo = dash.getWidget("gaugeTwo");
let gaugeOnePct = data.gauges.percentOne;
let gaugeTwoPct = data.gauges.percentTwo;

setInterval(() => {
  gaugeOne.setData([gaugeOnePct, 100 - gaugeOnePct]);
  gaugeOnePct++;

  if (gaugeOnePct >= 100) gaugeOnePct = 0
  dash.renderScreen();
}, 200)

setInterval(() => {
  if (gaugeTwoPct > 99) gaugeTwoPct = 0

  gaugeTwo.setData(gaugeTwoPct);
  gaugeTwoPct++;

  dash.renderScreen();
}, 200)

// -----
// ----- //set dummy data on bar chart
// ----- function fillBar() {
// -----   const arr = []
// -----   for (let i=0; i<servers.length; i++) {
// -----     arr.push(Math.round(Math.random()*10))
// -----   }
// -----   bar.setData({titles: servers, data: arr})
// ----- }
// ----- fillBar()
// ----- setInterval(fillBar, 2000)
// -----
// -----
// ----- //set dummy data for table
// ----- function generateTable() {
// -----    const data = []
// -----
// -----    for (let i=0; i<30; i++) {
// -----      const row = []
// -----      row.push(commands[Math.round(Math.random()*(commands.length-1))])
// -----      row.push(Math.round(Math.random()*5))
// -----      row.push(Math.round(Math.random()*100))
// -----
// -----      data.push(row)
// -----    }
// -----
// -----    table.setData({headers: ['Process', 'Cpu (%)', 'Memory'], data: data})
// ----- }
// -----
// ----- generateTable()
// ----- table.focus()
// ----- setInterval(generateTable, 3000)
// -----
// -----
// ----- //set log dummy data
// ----- setInterval(function() {
// -----    const rnd = Math.round(Math.random()*2)
// -----    if (rnd==0) log.log('starting process ' + commands[Math.round(Math.random()*(commands.length-1))])
// -----    else if (rnd==1) log.log('terminating server ' + servers[Math.round(Math.random()*(servers.length-1))])
// -----    else if (rnd==2) log.log('avg. wait time ' + Math.random().toFixed(2))
// -----    screen.render()
// ----- }, 500)
// -----
// -----
// ----- //set spark dummy data
// ----- const spark1 = [1,2,5,2,1,5,1,2,5,2,1,5,4,4,5,4,1,5,1,2,5,2,1,5,1,2,5,2,1,5,1,2,5,2,1,5]
// ----- const spark2 = [4,4,5,4,1,5,1,2,5,2,1,5,4,4,5,4,1,5,1,2,5,2,1,5,1,2,5,2,1,5,1,2,5,2,1,5]
// -----
// ----- refreshSpark()
// ----- setInterval(refreshSpark, 1000)
// -----
// ----- function refreshSpark() {
// -----   spark1.shift()
// -----   spark1.push(Math.random()*5+1)
// -----   spark2.shift()
// -----   spark2.push(Math.random()*5+1)
// -----   sparkline.setData(['Server1', 'Server2'], [spark1, spark2])
// ----- }
// -----
// -----
// -----
// ----- //set map dummy markers
// ----- let marker = true
// ----- setInterval(function() {
// -----    if (marker) {
// -----     map.addMarker({"lon" : "-79.0000", "lat" : "37.5000", color: 'yellow', char: 'X' })
// -----     map.addMarker({"lon" : "-122.6819", "lat" : "45.5200" })
// -----     map.addMarker({"lon" : "-6.2597", "lat" : "53.3478" })
// -----     map.addMarker({"lon" : "103.8000", "lat" : "1.3000" })
// -----    }
// -----    else {
// -----     map.clearMarkers()
// -----    }
// -----    marker =! marker
// -----    screen.render()
// ----- }, 1000)
// -----
// ----- //set line charts dummy data
// -----
// ----- const transactionsData = {
// -----    title: 'USA',
// -----    style: {line: 'red'},
// -----    x: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50', '04:00', '04:10', '04:20', '04:30'],
// -----    y: [0, 20, 40, 45, 45, 50, 55, 70, 65, 58, 50, 55, 60, 65, 70, 80, 70, 50, 40, 50, 60, 70, 82, 88, 89, 89, 89, 80, 72, 70]
// ----- }
// -----
// ----- const transactionsData1 = {
// -----    title: 'Europe',
// -----    style: {line: 'yellow'},
// -----    x: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50', '04:00', '04:10', '04:20', '04:30'],
// -----    y: [0, 5, 5, 10, 10, 15, 20, 30, 25, 30, 30, 20, 20, 30, 30, 20, 15, 15, 19, 25, 30, 25, 25, 20, 25, 30, 35, 35, 30, 30]
// ----- }
// -----
// ----- const errorsData = {
// -----    title: 'server 1',
// -----    x: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25'],
// -----    y: [30, 50, 70, 40, 50, 20]
// ----- }
// -----
// ----- let latencyData = {
// -----    x: ['t1', 't2', 't3', 't4'],
// -----    y: [5, 1, 7, 5]
// ----- }
// -----
// ----- setLineData([transactionsData, transactionsData1], transactionsLine)
// ----- setLineData([errorsData], errorsLine)
// ----- // setLineData([latencyData], latencyLine)
// -----
// ----- setInterval(function() {
// -----    setLineData([transactionsData, transactionsData1], transactionsLine)
// -----    screen.render()
// ----- }, 500)
// -----
// ----- setInterval(function() {
// -----     setLineData([errorsData], errorsLine)
// ----- }, 1500)
// -----
// ----- setInterval(function(){
// -----   const colors = ['green','magenta','cyan','red','blue'];
// -----   const text = ['A','B','C','D','E','F','G','H','I','J','K','L'];
// -----
// -----   const value = Math.round(Math.random() * 100);
// -----   lcdLineOne.setDisplay(value + text[value%12]);
// -----   lcdLineOne.setOptions({
// -----     color: colors[value%5],
// -----     elementPadding: 4
// -----   });
// -----   screen.render()
// ----- }, 1500);
// -----
// ----- let pct = 0.00;
// -----
// ----- function updateDonut(){
// -----   if (pct > 0.99) pct = 0.00;
// -----   let color = "green";
// -----   if (pct >= 0.25) color = "cyan";
// -----   if (pct >= 0.5) color = "yellow";
// -----   if (pct >= 0.75) color = "red";
// -----   donut.setData([
// -----     {percent: parseFloat((pct+0.00) % 1).toFixed(2), label: 'storage', 'color': color}
// -----   ]);
// -----   pct += 0.01;
// ----- }
// -----
// ----- setInterval(function() {
// -----    updateDonut();
// -----    screen.render()
// ----- }, 500)
// -----
// ----- function setLineData(mockData, line) {
// -----   for (let i=0; i<mockData.length; i++) {
// -----     const last = mockData[i].y[mockData[i].y.length-1]
// -----     mockData[i].y.shift()
// -----     const num = Math.max(last + Math.round(Math.random()*10) - 5, 10)
// -----     mockData[i].y.push(num)
// -----   }
// -----
// -----   line.setData(mockData)
// ----- }
// -----

