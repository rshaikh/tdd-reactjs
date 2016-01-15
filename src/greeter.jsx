import React from "react";

var Greeter = React.createClass({
  render: function() {
    return (
        <div className="greeting">
          Hello World!
        </div>
    );
  }
});

module.exports = Greeter;