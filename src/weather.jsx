import React from 'react';
import Cities from './cities.jsx';
import Temperature from './temperature.jsx';

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