import React from 'react';

import './styles.css'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false,
        }
    }

    receiveInputDataFromChild = (value) => {
        this.setState({
            filterText:value,
        })
    }

    updateInStockOnly = () => {
        this.setState({
            inStockOnly:this.state.inStockOnly ? false : true,
        })
    }

    render(){
        const dataModel=this.props.dataModel;
        var productsList=[]
        for(let i=0;i<dataModel.length;i++){
            if(dataModel[i].name.includes(this.state.filterText)){
                productsList.push(dataModel[i])
            }
        }
        if(this.state.inStockOnly){
            for(let i=0;i<productsList.length;i++){
                if(!productsList[i].stocked){
                    productsList.splice(i,1)
                    i--;
                }
            }
        }
        return(
            <div className="full-page-content">
                <SearchBar filterText={this.state.filterText}  sendUserInput={this.receiveInputDataFromChild} updateInStock={this.updateInStockOnly}/>
                <ProductTable items={productsList}/>
            </div>
        )
    }
}

export default FilterableProductTable