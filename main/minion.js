'use strict';

let sub = require('./subconfig.js');
let seed = require('../core/seed.js');
const privateprops = new WeakMap();

class Worker {
  constructor(config) {
    privateprops.set(this, {
      config: config
    })
  }
  _createService (config) {
    var s = seed.clone();
    s.profile = config.profile || 'http';
    s.port = config.port || 5001;
    return s;
  }
  getRunningService () {
    return (privateprops.get(this).running) privateprops.get(this).service: null;
  }
  start () {
    let config = privateprops.get(this).config;
    let service = this._createService(config);
    let running = true;
    privateprops.set(this, {
      service: service,
      running: running
    });
    return running;
  }
}

module.exports = function WorkerFactory (c) {
  return new Worker(c);
}
