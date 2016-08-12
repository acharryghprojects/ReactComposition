"use strict";
//Smart component, goes and finsd the data and pass it to the component
var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    //function to set the initial state of a component, it is part of the lifecycle of the app
    getInitialState: function(){
        return{
            authors : []
        };
    },

    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors()});
        }
    },

    render: function(){
       
        return(
            <div>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;