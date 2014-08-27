var React = require('react');

var App = require('./components/App');

React.renderComponent(App(), document.getElementById('App'));

window.addEventListener('click', function() {
  document.body.webkitRequestFullScreen();
});
