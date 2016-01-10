var React = require('react');

var ChatItem = React.createClass({
  render: function () {
    var content = React.createElement("p", null, this.props.message)
    return React.createElement("div", {
      "className": "seven columns item-chat " + ((!this.props.others)? "":"offset-by-five")
    }, content);
  }
});

module.exports = ChatItem;
