import React from 'react';
import './styles.css'
import Messages from '../Messages'

class GreetingMsg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : '',
            onfocus : false,
            onsubmit: false,
            finalMessage:''
        }
    }

    showText(e) {
        this.setState(
            {
                onsubmit:true,
                finalMessage : this.state.message,
            }
        )
        e.preventDefault();
    }

    updateInputValue(e) {
        this.setState( {
            message : e.target.value,
        })
    }

    Onfocus_function = (e) =>{
      this.setState(
          {
              onfocus: true,
          }
      )
      
    }

    onBlur = () => {
        this.setState(
            {
                onfocus:false
            }
        )
    }


    render(){
        // let span,h1;
        // if (this.state.onsubmit){
        //     //h1 = <Messages msgcontent={this.state.message}/>;
        //     h1 = <h1>{this.state.finalMessage}</h1>
        // }
        return (
            <div>
                <form onSubmit={(e) => this.showText(e)} className="input-form">
                    <input type="text" onChange={(e) => this.updateInputValue(e)} value={this.state.message} onFocus={this.Onfocus_function} onBlur={this.onBlur}/>
                    {this.state.onfocus ? <span className="user-name-rule">Username should be in A-Za-z</span> : null}
                    <input type="submit" value="Greet" className="submit-button"/>
                </form>
                
                
                {this.state.onsubmit?<h1>{this.state.finalMessage}</h1>:null}
                
            </div>
        )
    }
}


export default GreetingMsg