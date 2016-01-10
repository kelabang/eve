var React = require('react');
var Columns = require('columns');

var ChatInput = React.createClass({
  render: function () {
    var inputbox = React.createElement("input", {
      "type": "text",
      "className": "u-full-width",
      "placeholder": "ngobrol lah ..."
    });
    var inputbutton = React.createElement("input", {
      "className": "button-primary kirim",
      "type": "submit",
      "value": "kirim"
    });
    var wrap = React.createElement("div", {
        className: "row chat-input"
      },
      React.createElement(Columns, {
        columns: 'eight',
        last: inputbox
      }),
      React.createElement(Columns, {
        columns: 'four',
        last: inputbutton
      })
    );
    var form = React.createElement("form", {
      'style': {
        'margin': '0px'
      }
    }, wrap);
    return React.createElement("div", {"className": "row chat-input"},
      form
    );
  }
});

module.exports = ChatInput;
