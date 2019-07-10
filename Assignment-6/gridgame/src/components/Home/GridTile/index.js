import React from 'react';
import './styles.css'

class GridTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bgColor:'',
            className:props.className,
        }
        setTimeout(() => {this.updateState('grid-tile');console.log("reset")},props.ms);
    }



    updateState = (ClassName) => {
        this.setState({
            className:ClassName,
        })
    }

    handleClick = (e) => {
        let id=parseInt(e.target.id,10)
        if(this.props.correct.includes(id)){
            this.setState({bgColor:'green'})
            this.props.callbackFromParent(id);
        }
        else{
            this.setState({bgColor:'red'});
            setTimeout(() => {this.props.callbackFromParent(id);} ,1000)
        }
    }

    render(){
        return(
            <div className={this.state.className} id={this.props.value} onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}}></div>
        )
    }
}

export default GridTile