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
            randomNumbers: this.randomNumbersGenerator(props.grid_size)
        }
        this.userSelected=[]
        this.keyText=''

    }

    randomNumbersGenerator = (grid_size) => {
        
        var gridFullSize=grid_size*grid_size;
        var dupCorrect=[]
        var numbersArray=Array.from(Array(gridFullSize).keys())
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
            return array
          }
        var shuffleArray=shuffle(numbersArray)
        for(let i=0;i<grid_size;i++){
            dupCorrect.push(shuffleArray[i])
        }
        return dupCorrect
    }

    myCallback = (idFromChild) => {
        if(this.state.randomNumbers.includes(idFromChild)){
            this.userSelected.push(idFromChild)
            if(this.userSelected.length==this.state.randomNumbers.length){
                if(this.state.level>2){
                    setTimeout(() => {alert("Congratulations!!!!")
                    this.gridHide={
                        display:"none"
                    }
                    window.location.reload();
                },1000);
            }

                setTimeout(() => {this.setState({
                                    level:this.state.level+1,
                                    grid_size:this.state.grid_size+1,
                                    randomNumbers:this.randomNumbersGenerator(this.state.grid_size+1)
                                    });
                                    this.userSelected=[];
                                    //this.randomNumbersGenerator();
                                    },1000);
                
        }
        }
        else{
            
            this.userSelected=[];
            if(this.state.level==0) 
            { 
                this.keyText=='key' ? this.keyText='' : this.keyText='key';
            }
            this.setState({
                level:0,
                grid_size:3,
                randomNumbers:this.randomNumbersGenerator(3),
            });
        }
    }

    handleChange = () => {
        this.state.className=="page-header-light"? this.setState({className:'page-header-dark'}):this.setState({className:'page-header-light'});
    }

    displaygrid = () => {
        let squares=[];
        for(let i=0;i<this.state.grid_size*this.state.grid_size;i++){
            let each=''
            if(this.state.randomNumbers.includes(i)){
                each=<GridTile value={i} key={this.state.level+"-"+i+this.keyText} level={this.state.level} correct={this.state.randomNumbers} className='initial-grid-tile' ms={this.state.grid_size*1000} callbackFromParent={this.myCallback}/>
            }else
                each=<GridTile value={i} key={this.state.level+"-"+i+this.keyText} level={this.state.level} correct={this.state.randomNumbers} className='grid-tile' ms={this.state.grid_size*1000} callbackFromParent={this.myCallback}/>
            squares.push(each)
        }
        return squares;
    }

    render(){
        var gridStyle={
            gridTemplateRows: "repeat("+this.state.grid_size+",70px)",
            gridTemplateColumns: "repeat("+this.state.grid_size+",70px)",

        }
        var isGridActive=(<div className="grid-container" style={gridStyle}>
                            {this.displaygrid()}</div>)
        return(
            <div className={this.state.className} style={this.gridHide}>
                <div className="page-body" >
                    <span className="level-id">Level: {this.state.level}</span>
                    <span className="mode-text">Theme mode:</span>
                    <label className="switch">
                        <input type="checkbox" onChange={this.handleChange}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                {isGridActive}
            </div>
        )
    }
}

export default Home