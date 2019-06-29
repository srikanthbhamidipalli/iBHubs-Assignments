import React from 'react';
import './styles.css';


class CheckBoxes extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                submit_option : false,
                selected_cities : [],
                scities : []
            }
            
        
        }
    onsubmit = () => {
        this.setState({
            submit_option : true,
            scities : this.state.selected_cities
        })

    }

    handleChange = e => {
        this.setState({
            selected_cities : this.state.selected_cities.concat(e.target.value)
        })
        let a=this.state.selected_cities
        for(let i=0;i<this.state.selected_cities.length;i++){
            if(e.target.value == this.state.selected_cities[i]){
                
                a.splice(i,1)
                this.setState({
                    selected_cities : a,
                })
                i--
                
            }
        }
        
        }
     

    displayElements = () =>{
        
        let citylist=[]
        for(let i=0;i<this.props.cities.length;i++){
            const fname = (<li>
            <label>
                <input type="checkbox" value={this.props.cities[i]}  onChange={this.handleChange}/>
                {this.props.cities[i]}
            </label>
        </li>)
        citylist.push(fname)
        }
        return citylist
    }
    
    
    render(){
        
        
        
        let span;
        return (
            <div className="cities-form">
                <ul>
                    <li>Which cities you have visited ?</li>
                    {this.displayElements()}    
                </ul>
                <button onClick={this.onsubmit}>submit</button>
                { this.state.submit_option ? span=(<span >You have visited these cities <span className=""> { this.state.scities.toString() } </span></span>) : ""}
            </div>
        )
    }
}

export default CheckBoxes