'use strict';
var $ = require('socket');
const privateprops = new WeakMap();
var Ssocket = class Ssocket {
  constructor() {
    console.log("i'm created");
  }
  setSocket(socket) {
    privateprops.set(this, {
      $: socket
    });
  }
  getData(url) {
    let $ = privateprops.get(this).$;
    return $.ajax({
      url: url,
      dataType: 'json',
      cache: false
    });
  }
}
var implementedSajax = new Ssocket();
implementedSajax.setSocket($);
module.exports = implementedSajax;
