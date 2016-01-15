'use strict';
var sajax = require('sajax');
var privateprops = new WeakMap;
var Stransport = class Stransport {
  setMode (mode) {
    privateprops.set(this, {
      mode: mode
    })
  }
  setMap (key, value) {
    var map = (privateprops.has(this, 'map'))? privateprops.get(this).map: {};
    map[key] = value;
    privateprops.set(this, {
      map: map
    });
  }
};

module.exports = function (type) {
  let imp = new Stransport();
  imp.setMap('ajax', sajax);
  imp.setMode(type || 'ajax');
  return imp;
};
