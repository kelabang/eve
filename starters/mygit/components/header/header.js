var React = require('react');

var Header = React.createClass({
  render: function () {
    var header = React.createElement("h5", {
    }, "Ngobrol Yuk!");
    var wrap = React.createElement("div", {
      className: "twelve columns"
    }, header);
    return React.createElement("div", {
      className: "row head"
    }, wrap);
  }
});

module.exports = Header;
