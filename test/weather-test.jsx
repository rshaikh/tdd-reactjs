jest.autoMockOff();
jest.mock('../src/services.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Weather = require("../src/weather.jsx");
var Cities = require("../src/cities.jsx");
var Temperature = require("../src/temperature.jsx");
var Services = require("../src/services.jsx");

describe("weather app", function () {

  it("should display temperature for selected city", function () {

    Services.getCities.mockImplementation(function (success) {
      success([
        {
          "id": 1,
          "name": "Pune"
        }])
    });
    Services.getTemperature.mockImplementation(function (cityId, success) {
      success(
        {
          "id": 1,
          "name": "Pune",
          "temperature": "21"
        })
    });

    var weather = TestUtils.renderIntoDocument(<Weather/>);
    var cities = TestUtils.findRenderedComponentWithType(weather, Cities);

    var cityDropDown = TestUtils.findRenderedDOMComponentWithTag(cities, 'select');

    TestUtils.Simulate.change(cityDropDown, {target: {value: 1}});

    var temperatureComponent = TestUtils.findRenderedComponentWithType(weather, Temperature);
    var city = TestUtils.findRenderedDOMComponentWithClass(temperatureComponent, "city");
    var temperature = TestUtils.findRenderedDOMComponentWithClass(temperatureComponent, "temperature");

    expect(city.textContent).toEqual("Pune");
    expect(temperature.textContent).toEqual("21");
  })

});

