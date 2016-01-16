import React from "react";
import Services from "./services.jsx"

var Cities = React.createClass({
  componentDidMount: function () {
    var self = this;
    Services.getCities(function (cities) {
      self.setState({cities: cities});
    });
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