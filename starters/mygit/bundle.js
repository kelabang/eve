/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);

	var Header = __webpack_require__(3);
	var Container = __webpack_require__(4);
	var App = React.createClass({
	  render: function () {
	    return React.createElement("div", {"className": "container app-cmp"},
	    React.createElement(Header),
	    React.createElement(Container));
	  }
	});
	console.log('>> ready')
	ReactDOM.render(
	  React.createElement(App, null),
	  document.getElementById('app')
	);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var Header = React.createClass({
	  render: function () {
	    var header = React.createElement("h5", {
	    }, "Ngobrol Yuk!");
	    var wrap = React.createElement("div", {
	      className: "twelve columns"
	    }, header);
	    return React.createElement("div", {
	      className: "row head"
	    }, wrap);
	  }
	});

	module.exports = Header;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ContainerProfile = __webpack_require__(5);
	var ContainerChat = __webpack_require__(8);
	var ContainerOnline = __webpack_require__(13);
	var Container = React.createClass({
	  render: function () {
	    return React.createElement("div", {"className": "row body container-cmp"},
	      React.createElement(ContainerProfile, null),
	      React.createElement(ContainerChat, null),
	      React.createElement(ContainerOnline, null)
	    )
	  }
	});

	module.exports = Container;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Subheader = __webpack_require__(6);
	var Profile = __webpack_require__(7);

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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Subheader = React.createClass({
	  render: function (){
	    return React.createElement("h4", null, this.props.subhead || "sub head")
	  }
	});
	module.exports = Subheader;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Subheader = __webpack_require__(6);
	var ChatInput = __webpack_require__(9);
	var ChatContent = __webpack_require__(11);

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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Columns = __webpack_require__(10);

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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var Columns = React.createClass({
	  render: function () {
	    return React.createElement("div", {
	      "className": (this.props.columns || "one") + " columns"
	    }, this.props.last)
	  }
	})

	module.exports = Columns;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Chatitem = __webpack_require__(12);
	var Chatcontent = React.createClass({
	  render: function () {
	    var data = [
	      {
	        id: '123',
	        message: 'ini gw',
	        user_id: '234',
	      },
	      {
	        id: '123',
	        message: 'ini gw',
	        user_id: '234',
	        others: true
	      },
	      {
	        id: '123',
	        message: 'ini gw',
	        user_id: '234',
	        others: true
	      }
	    ];
	    var list = data.map(function (v) {
	      return React.createElement(Chatitem, v)
	    });
	    return React.createElement('div', {
	      className: 'row list-chat'
	    },list);
	  }
	});
	module.exports = Chatcontent;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var ChatItem = React.createClass({
	  render: function () {
	    var content = React.createElement("p", null, this.props.message)
	    return React.createElement("div", {
	      "className": "seven columns item-chat " + ((!this.props.others)? "":"offset-by-five")
	    }, content);
	  }
	});

	module.exports = ChatItem;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Subheader = __webpack_require__(6);
	var OnlineList = __webpack_require__(14);

	var Containeronline = React.createClass({
	  render: function () {
	    return React.createElement("div", {"className": "three columns online container-online-cmp"},
	    React.createElement(Subheader, {
	      "subhead": "Online"
	    }),
	    React.createElement(OnlineList)
	    )
	  }
	});

	module.exports = Containeronline;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Profile = __webpack_require__(7);

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


/***/ }
/******/ ]);