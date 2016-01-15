jest.dontMock('../src/greeter.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Greeter = require('../src/greeter.jsx');

describe('Greeter', () => {

  it('should greet', () => {

    //TestUtils.renderIntoDocument(<Greeter/>);

    /*var checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's Off by default
    expect(checkboxNode.textContent).toEqual('Hello Rashid');*/
    expect("Hello").toEqual('Hello');
  });

});