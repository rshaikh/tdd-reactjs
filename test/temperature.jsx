jest.dontMock('../src/temperature.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils'
import Services from '../src/services.jsx';

const Temperature = require('../src/temperature.jsx');

describe('Temperature', () => {

    it('should display title', () => {
        var temperature = TestUtils.renderIntoDocument(<Temperature/>);

        var title = TestUtils.findRenderedDOMComponentWithClass(temperature, 'title');

        expect(title.textContent).toEqual("Current temperature");
    });

    it('should fetch and display city name for given city id', ()=> {
        Services.getTemperature.mockImplementation(function(cityId, success){
            var response = {
                "id": 1,
                "name": "Pune",
                "temperature": "21"
            };
            success(response);
        });

        var temperature = TestUtils.renderIntoDocument(<Temperature cityId="1"/>);

        var cityName = TestUtils.findRenderedDOMComponentWithTag(temperature, 'h1');

        expect(cityName.textContent).toEqual("Pune");
    });

    it('should fetch and display temperature for given city id', ()=> {
        Services.getTemperature.mockImplementation(function(cityId, success){
            var response = {
                "id": 1,
                "name": "Pune",
                "temperature": "21"
            };
            success(response);
        });

        var temperature = TestUtils.renderIntoDocument(<Temperature cityId="1"/>);

        var temp = TestUtils.findRenderedDOMComponentWithTag(temperature, 'h2');

        expect(temp.textContent).toEqual("21");
    });

});