import React from "react";
import Services from "./services.jsx"

var Cities = React.createClass({
  componentDidMount: function () {
    Services.getCities(function (cities) {
      this.setState({cities: cities});
    }.bind(this));
  },

  getInitialState: function () {
    return {cities: []}
  },

  render: function () {
    var options = this.state.cities.map((city, index) => {
      return (<option key={'city_'+index} value={city.id}>{city.name}</option>)
    });

    return (
        <div>
          <span className='title'>Cities: </span>
          <select id="cities">
            {options}
          </select>
        </div>
    )
  }
});

module.exports = Cities;