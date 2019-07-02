import React from 'react';
import './styles.css'

class Animation2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked : false,
        }
    }

    handleClick = () => {
        this.state.clicked ? this.setState({clicked : false,}) : this.setState({clicked : true,})
    }
    render(){
        var classname=this.state.clicked ? 'click-state' : 'base-state';
        return(
            
            <div className={classname}><button onClick={this.handleClick}><img src="assets/images/downArrow.png" className="img-content"/></button></div>
        )
    }
}

export default Animation2