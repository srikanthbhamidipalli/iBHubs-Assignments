import React, { Component } from 'react'
import { observer } from 'mobx-react';

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

@observer
class ProductTable extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render(){
    var productList=[];
        let productCategory=null
        for(let i=0;i<this.props.productList.length;i++){
            let eachItem=this.props.productList[i]
            if(productCategory!==eachItem.category)
            productList.push(<ProductCategoryRow category={eachItem.category} key={eachItem.category}/>);
            productList.push(<ProductRow product={eachItem} key={eachItem.name}/>)
            productCategory=eachItem.category
        }

        return(

            <table className="products-info-table">
                {productList}
            </table>
        )
    }
}

export default ProductTable