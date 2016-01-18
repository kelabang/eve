var React = require('react');
var Subheader = require('subheader');
var ChatInput = require('chatinput');
var ChatContent = require('chatcontent');
var sajax = require('sajax');
var transport = require('stransport');

var ContainerChat = React.createClass({
  getInitialState: function() {
     return {
       message: '',
       collections: []
     };
   },
  componentDidMount: function () {
    var self = this;
    
    // sajax.getData('http://127.0.0.1:8080/mockup/chat.json')
    // .success(function (data) {
    //   if (self.isMounted()) {
    //     self.setState({
    //       collections: data
    //     });
    //   }
    // }.bind(this)).error(function (err){
    //   console.log('error', err);
    // }.bind(this));
  },
  setMessage: function (msg) {
    this.setState({
      message: msg
    });
  },
  pushMesssage: function (msg) {
    var newState = [msg].concat(this.state.collections);
    this.setState({
      collections: newState
    });
  },
  render: function () {
    var self = this;
    return React.createElement("div", {"className": "six columns container-chat-cmp"},
    React.createElement(Subheader, {
      "subhead": 'Obrolan'
    }),
    React.createElement(ChatInput, {
      _pushMessage: function (msg) {
        self.pushMesssage(msg);
      }
    }),
    React.createElement(ChatContent, {
      collections: self.state.collections
    })
  );
  }
});

module.exports = ContainerChat;
