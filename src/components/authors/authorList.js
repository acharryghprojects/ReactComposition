"use strict";
//dumb component, it just receive the data from the smart component
var React = require('react');

var AuthorList = React.createClass({

   //Define expectations for a given components
   propTypes:{
        authors: React.PropTypes.array.isRequired
    },


    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;