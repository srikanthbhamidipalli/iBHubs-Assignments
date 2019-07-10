import React from 'react';

import './styles.css'

class ProductCategoryRow extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <th>
                {this.props.category}
            </th>
        )
    }
}

export default ProductCategoryRow