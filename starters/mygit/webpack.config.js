var path = require('path');
var projectRoot = process.env.PWD; // Absolute path to the project root
var resolveRoot = path.resolve(projectRoot); // project root/node_modules
module.exports = {

  entry: './components/app.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    root: resolveRoot,
    alias: {
      // react components
      'container': resolveRoot+'/components/container/container',
      'header': resolveRoot+'/components/header/header',
      'profile': resolveRoot+'/components/profile/profile',
      'containeronline': resolveRoot+'/components/containeronline/containeronline',
      'containerprofile': resolveRoot+'/components/containerprofile/containerprofile',
      'containerchat': resolveRoot+'/components/containerchat/containerchat',
      'onlinelist': resolveRoot+'/components/onlinelist/onlinelist',
      'chatcontent': resolveRoot+'/components/chatcontent/chatcontent',
      'chatitem': resolveRoot+'/components/chatitem/chatitem',
      'chatinput': resolveRoot+'/components/chatinput/chatinput',
      'columns': resolveRoot+'/components/columns/columns',
      'subheader': resolveRoot+'/components/subheader/subheader',

      // service components
      'sajax': resolveRoot+'/service/sajax',
      'smessage': resolveRoot+'/service/smessage',
      'stransport': resolveRoot+'/service/stransport'
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': '$'
  },
  modulesDirectories: [
    'bower_components'
  ]
}
