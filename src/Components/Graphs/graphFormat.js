import Moment from 'moment';

export const formatHourlyData = (hourly) => {
  let hourlyData = [];
  for (let i=0; i < 24; i++){
    hourlyData[i] = {
      "time": Moment(hourly[i].dt * 1000).format('hh:mm A'),
      "temperature": hourly[i].temp
    }
  }
  return hourlyData;
};

export const formatDailyData = (daily) => {
  let dailyData = [];
  for (let i=0; i < 8; i++){
    dailyData[i] = {
      "Day": Moment(daily[i].dt * 1000).format('dddd').slice(0, 3),
      "High": daily[i].temp.max,
      "Low": daily[i].temp.min
    }
  }
  return dailyData;
};