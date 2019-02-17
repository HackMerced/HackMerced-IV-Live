import React, { Component } from 'react';
import '../assets/css/Schedule.css';


class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        <div className="full-schedule">
                <table cellspacing="0">
                <caption>
                    <h4>Friday (March 1st)</h4>
                </caption>
                <tbody>
                    <tr>
                    <td className="hour">
                        <p>6pm</p>
                    </td>
                    <td className="event">
                        <p>Check-in Starts</p>
                    </td>
                    <td className="info">
                        <p>Check in, grab your swag and some snacks and get ready to start hacking!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>7pm</p>
                    </td>
                    <td className="event">
                        <p>Dinner</p>
                    </td>
                    <td className="info">
                        <p>Come by for Dinner!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>8pm</p>
                    </td>
                    <td className="event">
                        <p>Opening Ceremony</p>
                    </td>
                    <td className="info">
                        <p>Hear from HackMerced's founder, our sponsors, and info about our tracks and prizes!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>9pm</p>
                    </td>
                    <td className="event">
                        <p>Team Mixer</p>
                    </td>
                    <td className="info">
                        <p>Don't have a team? We'll help you meet other hackers to form a team!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>9pm</p>
                    </td>
                    <td className="event">
                        <p>Hacking Begins</p>
                    </td>
                    <td className="info">
                        <p>The countdown start now, good luck and start hacking!</p>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    <table cellspacing="0">

                <caption>
                    <h4>Saturday (March 2nd)</h4>
                </caption>
                <tbody>
                    <tr>
                    <td className="hour">
                        <p>12am</p>
                    </td>
                    <td className="event">
                        <p>Midnight Snack</p>
                    </td>
                    <td className="info">
                        <p>Having the late-night munchies? Come by to get a snack!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>7am</p>
                    </td>
                    <td className="event">
                        <p>Breakfast</p>
                    </td>
                    <td className="info">
                        <p>Come by for Breakfast!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>9am</p>
                    </td>
                    <td className="event">
                        <p>SolidWorks Workshop</p>
                    </td>
                    <td className="info">
                        <p>Hosted by SAE</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>12pm</p>
                    </td>
                    <td className="event">
                        <p>Lunch</p>
                    </td>
                    <td className="info">
                        <p>Come by for Lunch!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>6pm</p>
                    </td>
                    <td className="event">
                        <p>Dinner</p>
                    </td>
                    <td className="info">
                        <p>Come by for Dinner!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>8pm</p>
                    </td>
                    <td className="event">
                        <p>MLH Cupstacking</p>
                    </td>
                    <td className="info">
                        <p>Compete with others by stacking cups!</p>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    <table cellspacing="0">
                <caption>
                    <h4>Sunday (March 3rd)</h4>
                </caption>
                <tbody>
                    <tr>
                    <td className="hour">
                        <p>12am</p>
                    </td>
                    <td className="event">
                        <p>Midnight Snack</p>
                    </td>
                    <td className="info">
                        <p>Having the late-night munchies? Come by to get a snack!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>8am</p>
                    </td>
                    <td className="event">
                        <p>Project Submission</p>
                    </td>
                    <td className="info">
                        <p>Begin wrapping up your project and get your Devpost submission in!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>9am</p>
                    </td>
                    <td className="event">
                        <p>Hacking Ends</p>
                    </td>
                    <td className="info">
                        <p>hour is up! Set up your project presentation!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>9am</p>
                    </td>
                    <td className="event">
                        <p>Breakfast</p>
                    </td>
                    <td className="info">
                        <p>Come by for Breakfast!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>10:30am</p>
                    </td>
                    <td className="event">
                        <p>Judging</p>
                    </td>
                    <td className="info">
                        <p>Science fair judging starts and demos</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>12pm</p>
                    </td>
                    <td className="event">
                        <p>Lunch</p>
                    </td>
                    <td className="info">
                        <p>Come by for Lunch!</p>
                    </td>
                    </tr>
                    <tr>
                    <td className="hour">
                        <p>1pm</p>
                    </td>
                    <td className="event">
                        <p>Closing Ceremony</p>
                    </td>
                    <td className="info">
                        <p>Entrepenuer track Top 3 pitches and winners will be annouced!</p>
                    </td>
                    </tr>
                </tbody>
                </table>
        </div>
      </div>
    );
  }
}

export default Schedule;