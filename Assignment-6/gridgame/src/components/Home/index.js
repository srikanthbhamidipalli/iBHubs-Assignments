import React from 'react';
import './styles.css'
import GridTile from './GridTile'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            className:'page-header-light',
            level:0,
            grid_size:props.grid_size,
        }
        this.userSelected=[]
        // this.gridStyle={
            
        //     gridTemplateRows: "repeat("+props.grid_size+",70px)",
        //     gridTemplateColumns: "repeat("+props.grid_size+",70px)",

        // }
        this.randomNumbersGenerator();
    }

    randomNumbersGenerator = () => {
        this.grid_size=this.state.grid_size*this.state.grid_size;
        this.dup_correct=[]
        this.numbersArray=Array.from(Array(this.grid_size).keys())
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
            return array
          }
        this.shuffleArray=shuffle(this.numbersArray)
        for(let i=0;i<this.state.grid_size;i++){
            this.dup_correct.push(this.shuffleArray[i])
        }
        console.log(this.dup_correct)
    }
    myCallback = (idFromChild) => {
        if(this.dup_correct.includes(idFromChild)){
            this.userSelected.push(idFromChild)
            if(this.userSelected.length==this.dup_correct.length){
                setTimeout(() => {this.setState({
                    level:this.state.level+1,
                    grid_size:this.state.grid_size+1,
                })},1000);
                this.userSelected=[]
            }
        }
        else{
            this.setState({
                level:0,
                grid_size:3,
            })
            
        }
        
    }
    handleChange = () => {
        this.state.className=="page-header-light"? this.setState({className:'page-header-dark'}):this.setState({className:'page-header-light'});
    }

    displaygrid = () => {
        this.randomNumbersGenerator();
        let squares=[];
        for(let i=0;i<this.grid_size;i++){
            let each=''
            if(this.dup_correct.includes(i)){
                each=<GridTile value={i} grid_size={this.state.grid_size} correct={this.dup_correct} className='initial-grid-tile' ms={this.state.grid_size*1000} callbackFromParent={this.myCallback}/>
            }else
                each=<GridTile value={i} grid_size={this.state.grid_size} correct={this.dup_correct} className='grid-tile' ms={this.state.grid_size*1000} callbackFromParent={this.myCallback}/>
            squares.push(each)
        }
        return squares;
    }

    render(){
        this.gridStyle={
            
            gridTemplateRows: "repeat("+this.state.grid_size+",70px)",
            gridTemplateColumns: "repeat("+this.state.grid_size+",70px)",

        }
        var isGridActive=(<div className="grid-container" style={this.gridStyle}>
                            {this.displaygrid()}</div>)
        return(
            <div className={this.state.className}>
                <div className="page-body">
                    <span className="level-id">Level: {this.state.level}</span>
                    <span className="mode-text">Theme mode:</span>
                    <label className="switch">
                        <input type="checkbox" onChange={this.handleChange}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                {/* {this.state.displayGrid ? isGridActive : null} */}
                {isGridActive}
            </div>
        )
    }
}

export default Home