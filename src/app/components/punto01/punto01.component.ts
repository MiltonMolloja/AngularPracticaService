import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../../services/punto01/weather.service';
import { Weather } from './../../models/punto01/weather';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-punto01',
  templateUrl: './punto01.component.html',
  styleUrls: ['./punto01.component.css']
})
export class Punto01Component implements OnInit {

  weather: Weather;
  ciudadBuscar: string;

  weathers: Array<Weather>;

  constructor(private weatherService: WeatherService) {
    this.weather = new Weather();
    this.weathers = new Array<Weather>();
  }

  ngOnInit() {
  }

  BuscarWeathers(ciuda: string, form: NgForm) {
    if (form.valid == true) {
      this.weatherService.getWeathes(ciuda).subscribe(
        (result) => {
          //es necesario que convierta el JSON que
          this.weathers = new Array<Weather>();
          result['list'].forEach(element => {
            this.weather = new Weather();
            //Object.assign(this.weather,element);

            this.weather.id = element.id;
            this.weather.name = element.name;
            this.weather.coord_lat = element.coord.lat;
            this.weather.coord_lon = element.coord.lon;
            this.weather.main_temp = element.main.temp;
            this.weather.main_pressure = element.main.pressure;
            this.weather.main_humidity = element.main.humidity;
            this.weather.main_temp_min = element.main.temp_min;
            this.weather.main_temp_max = element.main.temp_max;
            this.weather.dt = element.dt;
            this.weather.wind_speed = element.wind.speed;
            this.weather.wind_deg = element.wind.deg;
            this.weather.sys_country = element.sys.country;
            this.weather.rain = element.rain;
            this.weather.clouds_all = element.clouds.all;
            this.weather.weather_id = element.weather.id;
            this.weather.weather_main = element.weather.main;
            this.weather.weather_description = element.weather.description;
            this.weather.weather_icon = element.weather.icon;


            // console.log(element.id);
            //           console.log(this.weather);
            //this.team.city = Object.
            //this.weathers.push(this.weather);
          });
          console.log(this.weather);
          // console.log(this.teams);
        },
        error => {
          alert("Error en la petición");
        }
      )
    }
  }



}
