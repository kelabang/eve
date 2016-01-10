var React = require('react');
var Subheader = require('subheader');
var ChatInput = require('chatinput');
var ChatContent = require('chatcontent');

var ContainerChat = React.createClass({
  render: function () {
    return React.createElement("div", {"className": "six columns container-chat-cmp"},
    React.createElement(Subheader, {
      "subhead": 'Obrolan'
    }),
    React.createElement(ChatInput),
    React.createElement(ChatContent)
  );
  }
});

module.exports = ContainerChat;
