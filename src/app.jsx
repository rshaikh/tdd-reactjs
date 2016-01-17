import React from "react";
import ReactDOM from 'react-dom';
import Cities from "./cities.jsx";
import Temperature from "./temperature.jsx";

ReactDOM.render(
    <Cities />,
    document.getElementById('cities')
);

ReactDOM.render(
    <Temperature cityId="1"/>,
    document.getElementById('temperature')
);