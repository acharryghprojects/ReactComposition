"use strict";

var React = require('react');

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default qaheader">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/QAC1.png"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">Our agenda</a></li>                        
                        <li><a href="/#authors">Our talks</a></li>                          
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;