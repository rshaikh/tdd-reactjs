jest.dontMock('../src/cities.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Services = require('../src/services.jsx');
const Cities = require('../src/cities.jsx');
const EventManager = require('../src/eventmanager.jsx');

describe('Cities', () => {

  it('should display title', () => {
    var cities = TestUtils.renderIntoDocument(<Cities/>);

    var title = TestUtils.findRenderedDOMComponentWithClass(cities, 'title');

    expect(title.textContent).toEqual("Cities: ");
  });

  it('should display empty dropdown when no cities', () => {
    var cities = TestUtils.renderIntoDocument(<Cities/>);

    var select = TestUtils.findRenderedDOMComponentWithTag(cities, 'select');
    var options = TestUtils.scryRenderedDOMComponentsWithTag(cities, 'option');

    expect(select).toBeDefined();
    expect(options.length).toEqual(1);
    expect(options[0].textContent).toEqual("Please select city");
    expect(options[0].disabled).toEqual(true);
  });

  it('should fetch and display all cities', () => {
    Services.getCities.mockImplementation(function (success) {
      success([{id: 1, name: "Pune"}, {id: 2, name: "Mumbai"}]);
    });

    var cities = TestUtils.renderIntoDocument(<Cities/>);
    var options = TestUtils.scryRenderedDOMComponentsWithTag(cities, 'option');

    expect(options.length).toEqual(3);
    expect(options[1].value).toEqual('1');
    expect(options[2].value).toEqual('2');
    expect(options[1].textContent).toEqual("Pune");
    expect(options[2].textContent).toEqual("Mumbai");
  });

  it('should emit event when city changed', () => {
    Services.getCities.mockImplementation(function (success) {
      success([{id: 1, name: "Pune"}, {id: 2, name: "Mumbai"}]);
    });

    var cities = TestUtils.renderIntoDocument(<Cities/>);
    var select = TestUtils.findRenderedDOMComponentWithTag(cities, 'select');

    TestUtils.Simulate.change(select, { target: { value: 1 } });

    expect(EventManager.emit).toBeCalledWith("cityChanged", '1');
  });

});