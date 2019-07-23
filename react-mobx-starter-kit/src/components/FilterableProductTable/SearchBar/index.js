import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class SearchBar extends Component{
    
    handleChange=(e)=>{
        this.props.updateFilterText(e.target.value)
    }

    handleClick=()=>{
        this.props.updateInStockOnly();
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