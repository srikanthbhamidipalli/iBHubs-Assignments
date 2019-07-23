import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class ProductCategoryRow extends Component{

    render(){
        return(
            <th>
                {this.props.category}
            </th>
        )
    }
}

export default ProductCategoryRow