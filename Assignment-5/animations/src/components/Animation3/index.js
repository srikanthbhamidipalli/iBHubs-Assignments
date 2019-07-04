import React from 'react';
import './styles.css'
import GridTile from './GridTile'

class Animation3 extends React.Component{
    constructor(props){
        super(props);
        this.grid_size=props.grid_size*props.grid_size;
        this.state = {
            className:'',
        }
        this.gridStyle={
            
            gridTemplateRows: "repeat("+props.grid_size+",70px)",
            gridTemplateColumns: "repeat("+props.grid_size+",70px)",

        }
    }

    handleClick = (e) => {
        if((e.target.id%this.props.grid_size==0)||(e.target.id%this.props.grid_size==this.props.grid_size-1)){
            this.setState({
                className:'flip',
            })
        }
        else{
            this.setState({className:'rotate',})
        }
    }

    displayGrid = () => {
        let squares=[];
        for(let i=0;i<this.grid_size;i++){
            let each=''
            each=<GridTile value={i} grid_size={this.props.grid_size}/>
            squares.push(each)
        }
        return squares;
    }
    render(){

        return (
            <div className="grid-container" style={this.gridStyle}>
                {this.displayGrid()}
            </div>
        )
    }
}

export default Animation3