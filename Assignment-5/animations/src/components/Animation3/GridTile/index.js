// import React from 'react';
// import './styles.css'


// class Animation3 extends React.Component{
//     constructor(props){
//         super(props);
//         this.grid_size=props.grid_size*props.grid_size;
//         this.state = {
//             className:'',
//         }
//         this.gridStyle={
            
//             gridTemplateRows: "repeat("+props.grid_size+",70px)",
//             gridTemplateColumns: "repeat("+props.grid_size+",70px)",

//         }
//     }

//     handleClick = (e) => {
//         alert(e.target.className)
//         if((e.target.id%this.props.grid_size==0)||(e.target.id%this.props.grid_size==this.props.grid_size-1)){
//             this.setState({
//                 className:'flip',
//             })
//         }
//         else{
//             this.setState({className:'rotate',})
//         }
//     }

//     displayGrid = () => {
//         let squares=[];
//         for(let i=0;i<this.grid_size;i++){
//             let each=''
//             each=<div className="{this.state.className}" id={i} onClick={this.handleClick}>{i}</div>
//             squares.push(each)
//         }
//         return squares;
//     }
//     render(){

//         return (
//             <div className="grid-container" style={this.gridStyle}>
//                 {this.displayGrid()}
//             </div>
//         )
//     }
// }

// export default Animation3

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