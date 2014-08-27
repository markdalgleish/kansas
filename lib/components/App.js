var React = require('react');

var StereoRenderer = require('./StereoRenderer');
var HelloWorld = require('./HelloWorld.jsx');
var div = React.DOM.div;

module.exports = React.createClass({

  render: function() {
    return (
      div({},
        StereoRenderer({ component: HelloWorld })
      )
    );
  }

});
