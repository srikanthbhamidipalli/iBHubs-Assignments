import React from 'react';
import './styles.css'

class DisableButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boxStatus : true,
            
        }
    }
    
    handleChange = (e) => {
        
        this.state.boxStatus ? this.setState({boxStatus : false,}) : this.setState({boxStatus : true,});
    }

    handleClick = () => {
        alert("I'm working!!")
    }

    render() {
        return (
            <div className="disable-button">
                <input type="checkbox"  onChange={this.handleChange} />
                Disable
                { this.state.boxStatus ? <button onClick={this.handleClick} className="button">Click me!</button> : <button  className="button" disabled>Click me!</button>}
            </div>
        )
    }
}

export default DisableButton