import 'zx/globals';

import { config } from './widgetConfigs.mjs';
const data = fs.readJsonSync('./dummyData.json');

import { Window } from './widgets/window.mjs';
import { Map } from './widgets/map.mjs';
import { LCD } from './widgets/lcd.mjs';
import { Log } from './widgets/log.mjs';
import { Donut } from './widgets/donut.mjs';
import { Gauge } from './widgets/gauge.mjs';
import { Table } from './widgets/table.mjs';
import { BarChart } from './widgets/bar-chart.mjs';
import { LineChart } from './widgets/line-chart.mjs';
import { Sparkline } from './widgets/sparkline.mjs';


// extend Gauge class to override the default updateData method
class GaugeX extends Gauge {
  updateData () {
    this.instance.setData([this.data.percent, 100 - this.data.percent]);
    this.data.percent++;

    if (this.data.percent >= 100) this.data.percent = 0
  }
}


/**
 * Create the main Window component
 */
const dash = new Window();


/**
 * Create each of the dashboard components and add them to the Window
 */
const mapCfg = config.map;
const map = new Map("map1", dash, mapCfg.coords, mapCfg.options, mapCfg.refreshMs);
map.initializeData(data.map);
map.register();

const lcdCfg = config.lcd;
const lcd = new LCD("lcd1", dash, lcdCfg.coords, lcdCfg.options, lcdCfg.refreshMs);
lcd.initializeData(data.lcd);
lcd.register();

const donutCfg = config.donut;
const donut = new Donut("donut1", dash, donutCfg.coords, donutCfg.options, donutCfg.refreshMs);
donut.initializeData(data.donut);
donut.register();

const gauge1Cfg = config.gauge1;
const gaugeOne = new GaugeX("gauge1", dash, gauge1Cfg.coords, gauge1Cfg.options, gauge1Cfg.refreshMs);
gaugeOne.initializeData(data.gaugeOne);
gaugeOne.register();

const gauge2Cfg = config.gauge2;
const gaugeTwo = new Gauge("gauge2", dash, gauge2Cfg.coords, gauge2Cfg.options, gauge2Cfg.refreshMs);
gaugeTwo.initializeData(data.gaugeTwo);
gaugeTwo.register();

const barsCfg = config.bars;
const bars = new BarChart("bars1", dash, barsCfg.coords, barsCfg.options, barsCfg.refreshMs);
bars.initializeData({ servers: data.servers });
bars.register();

const tableCfg = config.table;
const table = new Table("table1", dash, tableCfg.coords, tableCfg.options, tableCfg.refreshMs);
table.initializeData({ commands: data.commands });
//generateTable()
//table.focus()
table.register();

const sparksCfg = config.sparkline;
const sparks = new Sparkline("sparks1", dash, sparksCfg.coords, sparksCfg.options, sparksCfg.refreshMs);
sparks.initializeData(data.sparks);
//refreshSpark()
sparks.register();

const logCfg = config.log;
const log = new Log("log1", dash, logCfg.coords, logCfg.options, logCfg.refreshMs);
log.initializeData({ commands: data.commands, servers: data.servers});
//refreshSpark()
log.register();

const transactsCfg = config.transactions;
const transacts = new LineChart("transacts1", dash, transactsCfg.coords, transactsCfg.options, transactsCfg.refreshMs);
transacts.initializeData({ lines: data.transactions });
//setLineData([transactionsData[0], transactionsData[1]], transactionsLine)
transacts.register();

const errorsCfg = config.errorsChart;
const errors = new LineChart("errors1", dash, errorsCfg.coords, errorsCfg.options, errorsCfg.refreshMs);
errors.initializeData({ lines: data.errorsData });
//setLineData([transactionsData[0], transactionsData[1]], transactionsLine)
errors.register();


/**
 * Finish by completing setup for the Window and the now-included
 * widgets
 */
dash.setKeyboardShortcuts();
dash.onResizeSetScreen();
dash.renderScreen();

