var React = require('react');
var div = React.DOM.div;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      deviceOrientation: null
    };
  },

  componentDidMount: function() {
    this.deviceOrientationHandler = function(e) {
      this.setState({
        deviceOrientation: e
      });
    }.bind(this);

    window.addEventListener('deviceorientation', this.deviceOrientationHandler);
  },

  componentWillUnmount: function() {
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler);
  },

  render: function() {
    return div(
      {
        className: 'viewport',
        style: {
          perspective: '600px',
          position: 'absolute',
          overflow: 'hidden',
          top: '0',
          bottom: '0',
          left: this.props.eye === 'left' ? '0' : '50%',
          right: this.props.eye === 'right' ? '0' : '50%'
        }
      },
      div({
        className: 'head',
        style: {
          transformStyle: 'preserve-3d',
          transformOrigin: '0 0 500px',
          perspective: '600px',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          transform: !this.state.deviceOrientation ? 'none' :
            'rotateY(' + (-this.state.deviceOrientation.alpha) + 'deg)' +
            'rotateX(' + (-this.state.deviceOrientation.gamma - 90) + 'deg) ' +
            'rotateZ(' + (-this.state.deviceOrientation.beta) + 'deg) '
        }
      },
        div({
            className: 'eye',
            style: {
              transformStyle: 'preserve-3d',
              perspective: '600px',
              transform: 'translateX(' + (this.props.eye === 'right' ? '-' : '') + '25px)',
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0'
            }
          },
          this.props.component()
        )
      )
    );
  }

});
