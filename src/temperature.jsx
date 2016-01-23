import React from 'react'
import Services from './services.jsx';
import EventManager from './eventmanager.jsx';

var Temperature = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    EventManager.on("cityChanged", this.onCityChanged)
  },

  onCityChanged: function(cityId) {
    Services.getTemperature(cityId, function (data) {
      this.setState({city: data})
    }.bind(this));
  },

  render: function () {
    var template = <span className="warning">Please select the city to see weather</span>
    if (this.state.city) {
      template = (<div>
        <div>
          <span className="title">Temperature</span>
        </div>

        <div>
          <span className="city">{this.state.city.name}</span>
        </div>

        <div>
          <span className="temperature">{this.state.city.temperature}</span>
        </div>
      </div>)
    }

    return (
        <div>
          {template}
        </div>
    )
  }
});

module.exports = Temperature;