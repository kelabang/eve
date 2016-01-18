var React = require('react');
var Chatitem = require('chatitem');
var Sajax = require('sajax');
var Chatcontent = React.createClass({
  render: function () {
    var max = 1000;
    var min = 1;
    var list = (this.props['collections'] || []).map(function (v) {
      v.key = Math.random() * (max - min);
      return React.createElement(Chatitem, v);
    });
    return React.createElement('div', {
      className: 'row list-chat'
    },
    list);
  }
});
module.exports = Chatcontent;
