var React = require('react');
var Subheader = require('subheader');
var OnlineList = require('onlinelist');

var Containeronline = React.createClass({
  render: function () {
    return React.createElement("div", {"className": "three columns online container-online-cmp"},
    React.createElement(Subheader, {
      "subhead": "Online"
    }),
    React.createElement(OnlineList)
    )
  }
});

module.exports = Containeronline;
