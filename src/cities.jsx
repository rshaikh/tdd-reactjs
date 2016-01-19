import React from "react";
import Services from "./services.jsx";
import EventManager from './eventmanager.jsx';

var Cities = React.createClass({
  componentDidMount: function () {
    Services.getCities(function (cities) {
      this.setState({cities: cities});
    }.bind(this));
  },

  getInitialState: function () {
    return {cities: []}
  },

  onCityChange: function () {
    EventManager.emit("cityChanged", this.refs.citySelector.value);
  },

  render: function () {
    var options = this.state.cities.map((city, index) => {
      return (<option key={'city_'+index} value={city.id}>{city.name}</option>)
    });

    return (
        <div>
          <span className='title'>Cities: </span>
          <select ref="citySelector" id="cities" onChange={this.onCityChange}>
            <option disabled value="0" key="city_1000">Please select city</option>
            {options}
          </select>
        </div>
    )
  }
});

module.exports = Cities;