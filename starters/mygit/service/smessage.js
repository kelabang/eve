'use strict';

var transport = require('stransport')('ajax');

var privateprops = new WeakMap();
var smessage = class Smessage {
  setTransport () {
    privateprops.set(this, {
      'transport': transport
    });
  }
  getMessage () {
      let t = privateprops.get(this).transport;
  }
  postMessage (data) {
      let t = privateprops.get(this).transport;
  }
}

var implementedSmessage = new smessage();

implementedSmessage.setTransport(transport);

module.exports = implementedSmessage;
