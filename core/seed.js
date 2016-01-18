'use strict';

class Seed {
  constructor () {
    this._profile = null;
    this._port = null;
  }
  clone () {
    let pro = Object.assign({}, this);
    pro.constructor();
    return pro;
  }

  get port() {
    return this._port;
  }
  set port (number) {
    if(number) {
      this._port = (number === parseInt(number, 10))? number: parseInt(number);
    }
  }

  get profile () {
    return this._profile;
  }
  set profile (profile) {
    if(profile) {
      this._profile = profile;
    }
  }

}

module.exports = (new Seed);
