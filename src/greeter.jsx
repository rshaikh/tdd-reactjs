var React = require('react');

var Greeter = React.createClass({
  render: function() {
    return (
        <div className="greeting">
          Hello, {this.props.name} !
        </div>
    );
  }
});

module.exports = Greeter;