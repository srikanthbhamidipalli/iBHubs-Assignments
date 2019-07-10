import React from 'react';

import './styles.css'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props){
        super(props);
     
    }

    render(){
        var productList=[];
        let productCategory=null
        for(let i=0;i<this.props.items.length;i++){
            let eachItem=this.props.items[i]
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