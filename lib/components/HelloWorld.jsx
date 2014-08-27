var React = require('react');
var div = React.DOM.div;
var style = React.DOM.style;

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div className="box box--left">Hello</div>
        <div className="box box--right">World</div>
        <div className="rotating-text">Hello World!</div>
      </div>
    );
  }

});
