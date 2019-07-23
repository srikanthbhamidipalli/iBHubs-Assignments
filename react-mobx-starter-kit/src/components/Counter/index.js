import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable, computed, get } from 'mobx';

@observer 
class Counter extends Component{
@observable counterValue=0;

   handleInc=()=>{
       this.counterValue++;
   }

   handleDec=()=>{
       this.counterValue--;
   }

  @computed get currentCounterValue(){
       if(this.counterValue>0)
            return ""
        else
            return "disabled"
   }
    
   render() {
        return (
            <div>
                {this.counterValue}
                <div>
                    <button onClick={this.handleInc}>+</button>
                    <button onClick={this.handleDec} disabled={this.currentCounterValue}>-</button>
                </div>
            </div>
        )
    }
    
}

export default Counter