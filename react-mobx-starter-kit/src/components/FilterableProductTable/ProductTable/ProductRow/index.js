import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class ProductRow extends Component{

    render(){
        var inStock=this.props.product.stocked;
        return(
                <tr>
                    {inStock  ? <td>{this.props.product.name}</td> :<td style={{color:'red'}}>{this.props.product.name}</td>}
                    <td>{this.props.product.price}</td>
                </tr>
        )
    }

}

export default ProductRow