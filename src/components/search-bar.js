import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    onInputChange(term){
        this.setState( {term: term} );
        this.props.onSearch(term);
    }

    render(){
        return(
            <div className="search-bar">
            <input 
            placeholder="Enter search term"
            value={this.state.term} 
            onChange={ (event) => { this.onInputChange(event.target.value); }}/>
            </div>
        );
    }
}



export default SearchBar;