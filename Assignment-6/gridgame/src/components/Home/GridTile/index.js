import React from 'react';
import './styles.css'

class GridTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bgColor:'',
            className:props.className,
        }
        setTimeout(() => {this.updateState('grid-tile')},props.ms);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ className: nextProps.className ,bgColor:''});
        setTimeout(() => {this.updateState('grid-tile')},nextProps.ms);
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
            //this.props.callbackFromParent(id);
        }
    }

    // UpgradeUser = () => {
    //     if(this.count==this.props.correct.length-1) {
    //         alert("correct");
    //     }
    //}

    render(){
        return(
            <div>
            <div className={this.state.className} id={this.props.value} onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}}></div>
            {/* { setTimeout(() => {this.state.bgColor == 'red' ? this.goBacktoParent(): null},1000)} */}
            </div>
        )
    }
}

export default GridTile