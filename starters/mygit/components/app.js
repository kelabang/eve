var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('header');
var Container = require('container');
var App = React.createClass({
  render: function () {
    return React.createElement("div", {"className": "container app-cmp"},
    React.createElement(Header),
    React.createElement(Container));
  }
});
console.log('>> ready');
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);
