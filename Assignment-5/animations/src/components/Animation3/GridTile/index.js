import React from 'react';
import './styles.css'

class GridTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            className:'',
        }
    }

    handleClick = (e) => {
        if((e.target.id%this.props.grid_size==0)||(e.target.id%this.props.grid_size==this.props.grid_size-1)){
            
            this.state.className=='flip' ? this.setState({className:'anti-flip',}):this.setState({className:'flip',});
        }
        else{
            this.state.className=='rotate'? this.setState({className:'anti-rotate',}): this.setState({className:'rotate',});
        }
    }

    render(){
        return(
            <div className={this.state.className} id={this.props.value} onClick={this.handleClick}>{this.props.value}</div>       
        )
    }
}

export default GridTile