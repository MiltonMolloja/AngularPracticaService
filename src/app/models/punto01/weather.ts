export class Weather {
  id: number;
  name: string;
  coord_lat: number;
  coord_lon: number;
  main_temp: number;
  main_pressure: number;
  main_humidity: number;
  main_temp_min: number;
  main_temp_max: number;
  dt: number;
  wind_speed: number;
  wind_deg: number;
  sys_country: string;
  rain: string;
  clouds_all: string;
  weather_id: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;

  Weather(id: number, name: string, coord_lat: number, coord_lon: number, main_temp: number, main_pressure: number, main_humidity: number, main_temp_min: number, main_temp_max: number, dt: number, wind_speed: number, wind_deg: number, sys_country: string, rain: string, clouds_all: string, weather_id: number, weather_main: string, weather_description: string, weather_icon: string) {
    this.id = id;
    this.name = name;
    this.coord_lat = coord_lat;
    this.coord_lon = coord_lon;
    this.main_temp = main_temp;
    this.main_pressure = main_pressure;
    this.main_humidity = main_humidity;
    this.main_temp_min = main_temp_min;
    this.main_temp_max = main_temp_max;
    this.dt = dt;
    this.wind_speed = wind_speed;
    this.wind_deg = wind_deg;
    this.sys_country = sys_country;
    this.rain = rain;
    this.clouds_all = clouds_all;
    this.weather_id = weather_id;
    this.weather_main = weather_main;
    this.weather_description = weather_description;
    this.weather_icon = weather_icon;
  }
}
