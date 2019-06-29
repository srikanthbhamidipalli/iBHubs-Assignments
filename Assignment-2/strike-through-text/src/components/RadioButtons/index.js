import React from 'react';
import './styles.css';


class RadioButtons extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                flavour : '',
                submit_option : false,
            }
        
        }
    onsubmit = () => {
       this.setState(
        {
            submit_option : true,
            flavour : this.radiovalue,
        }   
        )
    }

    handleChange = e => {
        this.radiovalue=e.target.value
    
    }

    displayElements = () =>{
        
        let flavourlist=[]
        for(let i=0;i<this.props.flavours.length;i++){
            const fname = (<li>
            <label>
                <input type="radio" value={this.props.flavours[i]} name="radio" onChange={this.handleChange}/>
                {this.props.flavours[i]}
            </label>
        </li>)
        flavourlist.push(fname)
        }
        return flavourlist
    }
    
    render(){
        
        
        
        let span;
        // if (this.submit_option){

        //     span = <span >Your Favourite Dessert is <span className="user-flavour">{this.state.flavour}</span></span>;

        // }
        return (
            <div className="dessert-form">
                <ul>
                    <li>What is your favorite Ice-Cream ?</li>
                    {this.displayElements()}    
                </ul>
                <button onClick={this.onsubmit}>submit</button>
                { this.state.submit_option ? span=(<span >Your Favourite Dessert is <span className="user-flavour">{this.state.flavour}</span></span>) : ""}
            </div>
        )
    }
}

export default RadioButtons