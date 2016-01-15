'use strict';
var $ = require('jquery');
const privateprops = new WeakMap();
var Sajax = class Sajax {
  constructor() {
    console.log("i'm created");
  }
  setJquery(jquery) {
    privateprops.set(this, {
      $: jquery
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
var implementedSajax = new Sajax();
implementedSajax.setJquery($);
module.exports = implementedSajax;
