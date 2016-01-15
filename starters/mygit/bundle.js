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
	var ContainerOnline = __webpack_require__(17);
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
	var ChatContent = __webpack_require__(15);
	var sajax = __webpack_require__(14);

	var ContainerChat = React.createClass({
	  getInitialState: function() {
	     return {
	       message: '',
	       collections: []
	     };
	   },
	  componentDidMount: function () {
	    var self = this;
	    sajax.getData('http://127.0.0.1:8080/mockup/chat.json')
	    .success(function (data) {
	      if (self.isMounted()) {
	        self.setState({
	          collections: data
	        });
	      }
	    }.bind(this)).error(function (err){
	      console.log('error', err);
	    }.bind(this));
	  },
	  setMessage: function (msg) {
	    this.setState({
	      message: msg
	    });
	  },
	  pushMesssage: function (msg) {
	    var newState = this.state.collections.concat([msg]);
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
	      },
	      'message': 'sialan'
	    }),
	    React.createElement(ChatContent, {
	      collections: self.state.collections
	    })
	  );
	  }
	});

	module.exports = ContainerChat;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Columns = __webpack_require__(10);
	var $ = __webpack_require__(11);
	var smessage = __webpack_require__(12);
	var ChatInput = React.createClass({
	  sendMessage: function (e) {
	    e.preventDefault(); // stop reloading page
	    var form = e.target;
	    var message = {
	      "id": "123",
	      "message": form.querySelector('[name="message"]').value,
	      "user_id": "234",
	      "others": true
	    }
	    console.log('this.props');
	    console.log(this.props);
	    this.props._pushMessage(message);
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
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var transport = __webpack_require__(13)('ajax');

	var privateprops = new WeakMap();
	var smessage = class Smessage {
	  setTransport () {
	    privateprops.set(this, {
	      'transport': transport
	    });
	  }
	  getMessage () {
	      let t = privateprops.get(this).transport;
	  }
	  postMessage (data) {
	      let t = privateprops.get(this).transport;
	  }
	}

	var implementedSmessage = new smessage();

	implementedSmessage.setTransport(transport);

	module.exports = implementedSmessage;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var sajax = __webpack_require__(14);
	var privateprops = new WeakMap;
	var Stransport = class Stransport {
	  setMode (mode) {
	    privateprops.set(this, {
	      mode: mode
	    })
	  }
	  setMap (key, value) {
	    var map = (privateprops.has(this, 'map'))? privateprops.get(this).map: {};
	    map[key] = value;
	    privateprops.set(this, {
	      map: map
	    });
	  }
	};

	module.exports = function (type) {
	  let imp = new Stransport();
	  imp.setMap('ajax', sajax);
	  imp.setMode(type || 'ajax');
	  return imp;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(11);
	const privateprops = new WeakMap();
	var Sajax = class Sajax {
	  constructor() {
	    console.log("i'm created");
	  }
	  setJquery(jquery) {
	    privateprops.set(this, {
	      $: jquery
	    });
	  }
	  getData(url) {
	    let $ = privateprops.get(this).$;
	    return $.ajax({
	      url: url,
	      dataType: 'json',
	      cache: false
	    });
	  }
	}
	var implementedSajax = new Sajax();
	implementedSajax.setJquery($);
	module.exports = implementedSajax;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Chatitem = __webpack_require__(16);
	var Sajax = __webpack_require__(14);
	var Chatcontent = React.createClass({
	  render: function () {
	    var max = 1000;
	    var min = 1;
	    var list = (this.props['collections'] || []).map(function (v) {
	      v.key = Math.random() * (max - min);
	      return React.createElement(Chatitem, v);
	    });
	    return React.createElement('div', {
	      className: 'row list-chat'
	    },
	    React.createElement('div', null, list));
	  }
	});
	module.exports = Chatcontent;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var ChatItem = React.createClass({
	  render: function () {
	    var content = React.createElement("p", null, this.props.message)
	    return React.createElement("div", {
	      "key": this.props.key,
	      "className": "seven columns item-chat " + ((!this.props.others)? "":"offset-by-five")
	    }, content);
	  }
	});

	module.exports = ChatItem;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Subheader = __webpack_require__(6);
	var OnlineList = __webpack_require__(18);

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
/* 18 */
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