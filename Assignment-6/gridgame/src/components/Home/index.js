import React from 'react';
import './styles.css'
import GridTile from './GridTile'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            className:'page-header-light',
            displayGrid:true,
        }
        this.gridStyle={
            
            gridTemplateRows: "repeat("+props.grid_size+",70px)",
            gridTemplateColumns: "repeat("+props.grid_size+",70px)",

        }
        
        this.grid_size=props.grid_size*props.grid_size;
        this.dup_correct=[]
        this.numbersArray=Array.from(Array(this.grid_size).keys())
        console.log(this.numbersArray)
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
            return array
          }
        this.shuffleArray=shuffle(this.numbersArray)
        for(let i=0;i<this.props.grid_size;i++){
            this.dup_correct.push(this.shuffleArray[i])
        }
        console.log(this.dup_correct)
    }

    myCallback = (idFromChild) => {
        if(this.dup_correct.includes(idFromChild)){

        }
        else{
            this.setState({
                displayGrid:false,
            })
        }
    }
    handleChange = () => {
        this.state.className=="page-header-light"? this.setState({className:'page-header-dark'}):this.setState({className:'page-header-light'});
    }

    displaygrid = () => {
        let squares=[];
        for(let i=0;i<this.grid_size;i++){
            let each=''
            if(this.dup_correct.includes(i))
                each=<GridTile value={i} grid_size={this.props.grid_size} correct={this.dup_correct} className='initial-grid-tile' ms={this.props.grid_size*1000} callbackFromParent={this.myCallback}/>
            else
                each=<GridTile value={i} grid_size={this.props.grid_size} correct={this.dup_correct} className='grid-tile' ms={this.props.grid_size*1000} callbackFromParent={this.myCallback}/>
            squares.push(each)
        }
        return squares;
    }

    render(){
        var isGridActive=(<div className="grid-container" style={this.gridStyle}>
                            {this.displaygrid()}</div>)
        return(
            <div className={this.state.className}>
                <div className="page-body">
                    <span className="level-id">Level: 0</span>
                    <span className="mode-text">Theme mode:</span>
                    <label className="switch">
                        <input type="checkbox" onChange={this.handleChange}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                {this.state.displayGrid ? isGridActive : null}
            </div>
        )
    }
}

export default Home