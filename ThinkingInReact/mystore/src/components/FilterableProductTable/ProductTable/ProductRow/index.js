import React from 'react';

import './styles.css'

class ProductRow extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

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