import React from 'react'
import apiConfig from './apiKeys';
import DayCard from './DayCards';

class WeekContainer extends React.Component{
state = {
    fullData: [],
    dailyData: []
  }

	componentDidMount = () => {
		/* Use Open Weather API 
			- sign up and use your log in to get free access using api key which provides 5 day forecast  
			- store api key in apiKeys.js 
			- TBD make zip code as a input parameter
		*/

		const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.WeatherAppReactSampl}`;
		fetch(weatherURL)
		    .then(res => res.json())
		    .then(data => {
		    	/*  data.list provides forecast every 3 hours.
		    		Access the dt_txt element from data.list to get the forecast at say, 6PM on each day.
		    		dailyDataIn should have 1 entry per day.
		    	*/
	    		const dailyDataIn = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  				
  				this.setState({
  					fullData: data.list,
  					dailyData: dailyDataIn
  				}, () => console.log(this.state))
	    	})
	}

	/* Process each element in the dailyData to format the forecast data into DayCard obj
	*/

	formatDayCards = () => {
	    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
	  }

	render(){
		return(
			//const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=99501&units=imperial&APPID=${apiConfig.WeatherAppReactSampl}`;
			//Hardcoded the location to be Anchorage, Alaska (zip code: 11102)
			<div className="container">
		      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
		      
		      <h5 className="display-5 text-muted">Anchorage, Alaska</h5>
		        <div className="row justify-content-center">

						{this.formatDayCards()}
				</div>
			</div>
		);

	}

}
export default WeekContainer;