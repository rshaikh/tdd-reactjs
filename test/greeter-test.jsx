jest.dontMock('../src/greeter.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Greeter = require('../src/greeter.jsx');

describe('Greeter', () => {

  it('should greet', () => {

    var element = TestUtils.renderIntoDocument(<Greeter name="World"/>);

    var greeterNode = ReactDOM.findDOMNode(element);

    expect(greeterNode.textContent).toEqual('Hello, World !');
  });

});