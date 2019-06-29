import React from 'react';
import "./styles.css"

class Dropdownlist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selected : '',
            selected_state : '',
            submit_option : false,
        }
    }

    handleChange = (e) => {
        this.setState({
            selected : e.target.value,
        })
    }

    onsubmit = () => {
        this.setState({
            submit_option : true,
            selected_state : this.state.selected,
        })
    }

    displayElements = () => {
        let statelist=[]
        for(let i=0;i<this.props.states.length;i++){
            const fname = (
                <option value={this.props.states[i]}  >{this.props.states[i]}</option>)
        statelist.push(fname)
        }
        return statelist
    }
  
    render(){
        let span;
        return (
            <div className="states-form">
                <select onChange={this.handleChange}>{this.displayElements()}    </select>
                <button onClick={this.onsubmit}>submit</button>
                { this.state.submit_option ? span=(<span >Your Favourite places are <span className=""> { this.state.selected_state } </span></span>) : ""}
            </div>
        )
    }
}

export default Dropdownlist