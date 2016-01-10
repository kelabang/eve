var React = require('react');

var Profile = React.createClass({
  render: function () {
    var picture = React.createElement("img", {
        className: "img-profile",
        src: "assets/images/d_user.png"
    });
    var name = React.createElement("p", null, "@[user_name]");
    return React.createElement("div",
    {"className": "profile-cmp"},
      picture,
      name
    );
  }
});

module.exports = Profile;
