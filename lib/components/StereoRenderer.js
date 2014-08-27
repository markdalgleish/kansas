var React = require('react');
var Viewport = require('./Viewport');
var div = React.DOM.div;

module.exports = React.createClass({

  render: function() {
    return (
      div({},
        Viewport({ eye: 'left', component: this.props.component }),
        Viewport({ eye: 'right', component: this.props.component })
      )
    );
  }

});
