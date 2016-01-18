'use strict';

var m = require('./minion.js');
const privateprops = new WeakMap();

class Bootstrap {
  constructor() {
    privateprops.set(this, {
      config: {
        name: 'default',
        port: 2000,
        type: 'http'
      }
    })
  }
  start(config) {
   var worker = this._create(config || this.config);
   if(worker.start) worker.start();
  }
  _create(config) {
    var thread = m(config);
    return thread;
  }
}

module.exports = new Bootstrap();
