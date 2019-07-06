import React from 'react';
import './styles.css'

class GridTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bgColor:'',
            isTimerRunning:true,
            className:props.className,
            id:0,
        }
        setTimeout(() => {this.updateState('grid-tile')},props.ms);
    }

    updateState = (ClassName) => {
        this.setState({
            className:ClassName,
        })
    }
    goBacktoParent = () =>{
        this.props.callbackFromParent(this.state.id);
    }
    handleClick = (e) => {
        let id=parseInt(e.target.id,10)
        if(this.props.correct.includes(id))
            this.setState({bgColor:'green',id:id})
        else{
            this.setState({bgColor:'red',id:id});
        }
    }

    render(){
        return(
            <div className={this.state.className} id={this.props.value} onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}}></div>
        )
    }
}

export default GridTile