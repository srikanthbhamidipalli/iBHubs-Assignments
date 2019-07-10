import React from 'react';

import './styles.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        
    }

    handleChange = (e) => {
        this.props.sendUserInput(e.target.value);
    }

    handleClick = () => {
        this.props.updateInStock()
    }
    render(){
        return(
            <div className="search-box-and-result">
                <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.props.filterText}/>
                <div>
                    <span><input type="checkbox" onClick={this.handleClick}/></span>
                    <span>Only show products in stock</span>
                </div>
            </div>
        )
    }
}

export default SearchBar