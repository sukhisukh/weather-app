import React from 'react';
/* Use moment library for Date formatting 
*/
var moment = require('moment');

/* DayCard component to render a single day's forecast
*/

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)
  /* Use owf fonts to display weather icons
  */
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
  console.log(imgURL)
  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
     </div>
    </div>
   )
}
export default DayCard;