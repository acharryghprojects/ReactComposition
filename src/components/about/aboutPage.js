"use strict";
var React = require('react');

var About = React.createClass({
        
    render: function(){
        return (
            <div>
                <h1>Agenda</h1>
                <p>Have a look at the available talks for this Summit, and dont forget to register!:
                    <ul>
                        <li>DevOps insights</li>
                        <li>The Pega World!</li>
                        <li>Application development - an introduction to JavaScript frameworks</li>
                        <li>LivePerson and its popularity</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;