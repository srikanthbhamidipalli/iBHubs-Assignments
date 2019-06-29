import React from 'react'
import './styles.css'

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minutes : 0,
            seconds : 0,
            timer_is_on : 0,
            laprows : []
        }
        this.lapstartTime=[]
        this.lapDifferences=[]
        this.lapcounter=0
    }

    timedCount = () => {
        if(this.state.seconds>59){
            this.setState({
                seconds : 0,
                minutes : this.state.minutes + 1,
            })
        }
        else{
        this.setState({
            seconds : this.state.seconds+1,
            })
        }
         this.timerId=setTimeout(this.timedCount, 1000);
    }

    startCount = () => {
        if (!this.state.timer_is_on){
        this.setState({
            timer_is_on : 1,
        })
        this.timedCount();
        }
    }

    stopCount = () => {
        clearTimeout(this.timerId)
        this.setState({
            timer_is_on : 0,
        })
    }

    resetCount = () => {
        this.setState({
            minutes : 0,
            seconds : 0,
            timer_is_on : 0,
            laprows : []
        })
        if(this.timerId)
            clearTimeout(this.timerId)
    }

    lapCount = () => {
        this.lapcounter=this.lapcounter+1
        this.lapstartTime=this.lapstartTime.concat(this.state.minutes*60+this.state.seconds)
        for(let i=1;i<this.lapstartTime.length;i++){
            let count=0;
            count=this.lapstartTime[i]-this.lapstartTime[i-1]
            this.lapDifferences=this.lapDifferences.concat(count)
        }
        var result1=this.seconds_to_minutes(this.lapstartTime)
        var result=this.seconds_to_minutes(this.lapDifferences)
        var row=(<div>#{this.lapcounter}        {result}           {result1}</div>)
        this.setState({
        laprows : this.state.laprows.concat(row)
        })
    }

    seconds_to_minutes = (arr) => {
        for(let i=0;i<arr.length;i++){
            let seconds = arr[i]
            let minutes = Math.floor(seconds/60)
            seconds = seconds - (minutes*60)
            this.convertedminutes=minutes
            this.convertedseconds=seconds
        }
        var lapstart=this.convertedminutes+" : "+this.convertedseconds
        return lapstart
    }

    render() {
        return (
            <div className="stop-watch">
                
                <div className="timer-display">
                    <span className="minutes-hand">{this.state.minutes}</span>
                    <span className="seconds-hand">{this.state.seconds}</span>
                </div>
                { this.state.laprows ? <div>{this.state.laprows.reverse()}<br/></div>:""}
                <div className="buttons-div">
                    <button onClick={this.startCount}>Start count!</button>
                    <button onClick={this.stopCount}>Stop count!</button>
                    <button onClick={this.resetCount}>Reset Count!</button>
                    <button onClick={this.lapCount}>Lap Count!</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch