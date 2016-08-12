"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Welcome to QA consulting</h1>
                <p>Proud to announce Barcelona Summit 2016 </p>            
            </div>
        );
    }
});

module.exports = Home;