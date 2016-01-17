import React from 'react'
import Services from './services.jsx';

var Temperature = React.createClass({

    getInitialState: function(){
        return {name: ""}
    },

    componentDidMount: function () {
        Services.getTemperature(this.props.cityId, function(data){
            this.setState(data)
        }.bind(this));
    },

    render: function () {
        return (
            <div>
                <span className="title">Current temperature</span>
                <h1>{this.state.name}</h1>
                <h2>{this.state.temperature}</h2>
            </div>
        )
    }
});

module.exports = Temperature;