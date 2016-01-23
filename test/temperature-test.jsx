jest.dontMock('../src/temperature.jsx');
jest.dontMock('../src/eventmanager.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils'
import Services from '../src/services.jsx';

const EventManager = require('../src/eventmanager.jsx');
const Temperature = require('../src/temperature.jsx');

describe('Temperature', () => {

    it('should display warning message when no city selected', ()=> {
        var temperature = TestUtils.renderIntoDocument(<Temperature/>);

        var warning = TestUtils.findRenderedDOMComponentWithClass(temperature, 'warning');
        var title = TestUtils.scryRenderedDOMComponentsWithClass(temperature, 'title');

        expect(warning.textContent).toEqual("Please select the city to see weather");
        expect(title.length).toEqual(0);
    });

    it('should fetch and display weather when city selected', ()=> {
        Services.getTemperature.mockImplementation(function(cityId, success){
            var response = {
                "id": 1,
                "name": "Pune",
                "temperature": "21"
            };
            success(response);
        });

       var temperature = TestUtils.renderIntoDocument(<Temperature/>);

        EventManager.emit("cityChanged", 1);

        var title = TestUtils.findRenderedDOMComponentWithClass(temperature, 'title');
        var cityName = TestUtils.findRenderedDOMComponentWithClass(temperature, 'city');
        var temperature = TestUtils.findRenderedDOMComponentWithClass(temperature, 'temperature');


        expect(title.textContent).toEqual("Temperature");
        expect(cityName.textContent).toEqual("Pune");
        expect(temperature.textContent).toEqual("21");
    });

    it('should not display warning when city is selected', ()=> {
        Services.getTemperature.mockImplementation(function(cityId, success){
            var response = {
                "id": 1,
                "name": "Pune",
                "temperature": "21"
            };
            success(response);
        });

       var temperature = TestUtils.renderIntoDocument(<Temperature/>);

        EventManager.emit("cityChanged", 1);

        var warning = TestUtils.scryRenderedDOMComponentsWithClass(temperature, 'warning');

        expect(warning.length).toEqual(0);
    });

});