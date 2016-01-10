var React = require('react');
var ContainerProfile = require('containerprofile');
var ContainerChat = require('containerchat');
var ContainerOnline = require('containeronline');
var Container = React.createClass({
  render: function () {
    return React.createElement("div", {"className": "row body container-cmp"},
      React.createElement(ContainerProfile, null),
      React.createElement(ContainerChat, null),
      React.createElement(ContainerOnline, null)
    )
  }
});

module.exports = Container;
