var React = require('react');

var Columns = React.createClass({
  render: function () {
    return React.createElement("div", {
      "className": (this.props.columns || "one") + " columns"
    }, this.props.last)
  }
})

module.exports = Columns;
