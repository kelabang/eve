var React = require('react');
var Subheader = React.createClass({
  render: function (){
    return React.createElement("h4", null, this.props.subhead || "sub head")
  }
});
module.exports = Subheader;
