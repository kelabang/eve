var React = require('react');
var Chatitem = require('chatitem');
var Chatcontent = React.createClass({
  render: function () {
    var data = [
      {
        id: '123',
        message: 'ini gw',
        user_id: '234',
      },
      {
        id: '123',
        message: 'ini gw',
        user_id: '234',
        others: true
      },
      {
        id: '123',
        message: 'ini gw',
        user_id: '234',
        others: true
      }
    ];
    var list = data.map(function (v) {
      return React.createElement(Chatitem, v)
    });
    return React.createElement('div', {
      className: 'row list-chat'
    },list);
  }
});
module.exports = Chatcontent;
