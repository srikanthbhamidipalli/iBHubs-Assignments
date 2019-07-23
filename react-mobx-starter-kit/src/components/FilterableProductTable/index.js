import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable, computed, get, action } from 'mobx';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

@observer
class FilterableProductTable extends Component{
    @observable filterText="";
    @observable inStockOnly=false;

    @action updateFilterText=(newText)=>{
        this.filterText=newText;
    }

    @action updateInStockOnly=()=>{
        this.inStockOnly=!this.inStockOnly
    }

    @computed get filteredProductsList(){
        const dataModel=this.props.dataModel;
        let productsList=[]
        productsList=dataModel.filter(item =>  item.name.includes(this.filterText))
        if(this.inStockOnly){
            for(let i=0;i<productsList.length;i++){
                if(!productsList[i].stocked){
                    productsList.splice(i,1)
                    i--;
                }
            }
        }
        return productsList
    }

    render(){
        return(
            <div>
                <SearchBar filterText={this.filterText} updateFilterText={this.updateFilterText} updateInStockOnly={this.updateInStockOnly}/>
                <ProductTable productList={this.filteredProductsList}/>
            </div>
        )
    }
}

export default FilterableProductTable