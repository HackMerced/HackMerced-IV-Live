import React, { Component } from 'react';

export default class Timer extends Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.getNewTimerState = this.getNewTimerState.bind(this);
    this.state = this.getNewTimerState();
  }

  getNewTimerState() {
    let diffMs = (new Date('March 1, 2019 18:00:00 PST') - new Date()); // milliseconds between now & Christmas
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let diffSecs = Math.round(((diffMs % 86400000) % 3600000) % 60000 / 1000); // seconds
    return {
      seconds: diffSecs, // responsible for the seconds
      minutes: diffMins, // responsible for the minutes
      hours: diffHrs, // responsible for the hours      
      days: diffDays, // responsible for the days      
    };
  }

  tick() {
    this.setState(this.getNewTimerState());
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    // clear the timer
    clearInterval(this.interval);
  }

  render() {    

    // If it is within 36 hours of the hackathon show the countdown. To enable the 36 hour check, replace 'true' with 'showTimer'
    const showTimer = (new Date() < new Date('February 26, 2019 18:00:00 PST')) ? false : true;
    if(true)
      return (
        <div>
          <div><span>{this.state.days}</span><br/>DAYS</div>
          <div><span>{this.state.hours}</span><br/>HRS</div>
          <div><span>{this.state.minutes}</span><br/>MINS</div>
          <div><span>{this.state.seconds}</span><br/>SECS</div>
        </div>
      );
    return (<div></div>);
  }
}
