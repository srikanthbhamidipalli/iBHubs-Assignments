import React from 'react';
import './styles.css'
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            msgbody : '',
            comments:[],
        }
    }

    handleChange = (e) => {
        this.setState({
            msgbody : e.target.value,
        })
    }

    handleClick = () => {
        var date = new Date();
        var day=''
        switch(date.getDay()){
            case 1: day='Mon';break;
            case 2: day='Tue';break;
            case 3: day='Wed';break;
            case 4: day='Thu';break;
            case 5: day='Fri';break;
            case 6: day='Sat';break;
            case 7: day='Sun';break; 
        }
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ampm;
        var date_time=day+"    "+strTime
        this.user = {
            name : '',
            profilepic : '',
            comment : '',
            time : '',
        }
        this.user.name = 'srikanth'
        this.user.profilepic=''
        this.user.comment=this.state.msgbody
        this.user.time=date_time

        this.setState(
            {
                comments : this.state.comments.concat(this.user),
            }
        )
    }

    displayComments = () => {
        let commentslist=[]
        for(let i=0;i<this.state.comments.length;i++){
        var complete_comment = (
            <div className="comment-body">
                <div className="profile-pic-and-name">
                    <img src="" alt="pic" className="profile-pic"/>
                    <span>{this.state.comments[i].name}</span>
                </div>
                <div className="comment">
                    <span>{this.state.comments[i].comment}</span>
                </div>
                <div >
                    <span className="time-zone">{this.state.comments[i].time}</span>
                </div>
            </div>
        )
        commentslist=commentslist.concat(complete_comment)
        }
        return commentslist
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.msgbody} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Comment</button>
                { this.state.comments.length > 0 ? <div className="msg-content">{this.displayComments().reverse()}</div> : '' }
            </div>
        )
    }
}

export default CommentBox