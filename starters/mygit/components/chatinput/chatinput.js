var React = require('react');
var Columns = require('columns');
var $ = require('jquery');
var smessage = require('smessage');
var ChatInput = React.createClass({
  sendMessage: function (e) {
    e.preventDefault(); // stop reloading page
    var form = e.target;
    var message = {
      "id": "123",
      "message": form.querySelector('[name="message"]').value,
      "user_id": "234",
      "others": false
    }
    this.props._pushMessage(message);
    this.reset(e.target);
  },
  reset: function (form) {
    form.querySelector('[name="message"]').value = ''
  },
  render: function () {
    var self = this;
    var inputbox = React.createElement("input", {
      "type": "text",
      "className": "u-full-width data-message",
      "name": "message",
      "placeholder": "ngobrol lah ..."
    });
    var inputbutton = React.createElement("input", {
      // "onClick": self.sendMessage,
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
      },
      'onSubmit': self.sendMessage
    }, wrap);
    return React.createElement("div", {
      "className": "row chat-input"
    },
      form
    );
  }
});

module.exports = ChatInput;
