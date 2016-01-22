jest.dontMock("../src/weather.jsx");

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Weather = require("../src/weather.jsx");

describe("weather app", function() {

  it("should display temperature for selected city", function() {
    var weather = TestUtils.renderIntoDocument(<Weather/>);
    var cityDropdown = TestUtils.findRenderedDOMComponentWithTag(weather, 'select');

    TestUtils.Simulate.change(cityDropdown, { target: { value: 1}});

    var city= TestUtils.findRenderedDOMComponentWithClass(weather, "city");
    var temperature = TestUtils.findRenderedDOMComponentWithClass(weather, "temperature");

    expect(city.textContent).toEqual("Pune");
    expect(temperature.textContent).toEqual("21");
  })

});

