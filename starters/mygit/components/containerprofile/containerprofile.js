var React = require('react');
var Subheader = require('subheader');
var Profile = require('profile');

var ContainerProfile = React.createClass({
  render: function () {
    return React.createElement("div",
    {"className": " three columns profile container-profile-cmp"},
    React.createElement(Subheader, {
      "subhead": 'Gw'
    }),
    React.createElement(Profile))
  }
});

module.exports = ContainerProfile;
