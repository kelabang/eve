var React = require('react');
var Profile = require('profile');

var OnlineList = React.createClass({
  render: function () {
    var data = [
      {
        img: "assets/images/d_user.png",
        username: "@[user_name]"
      },
      {
        img: "assets/images/d_user.png",
        username: "@[user_name]"
      },
      {
        img: "assets/images/d_user.png",
        username: "@[user_name]"
      },
      {
        img: "assets/images/d_user.png",
        username: "@[user_name]"
      }
    ];
    var list = data.map(function (v) {
      return React.createElement(Profile, v);
    });
    var wrap = React.createElement("div", {
      "className": "row online-list"
    },
    list);

    return wrap
  }
});

module.exports = OnlineList;
