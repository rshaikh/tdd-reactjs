import React from 'react';

var Weather = React.createClass({
  render: function () {
    return (
        <div>
          <Cities/>
          <Temperature/>
        </div>
    )
  }

});

module.exports = Weather;