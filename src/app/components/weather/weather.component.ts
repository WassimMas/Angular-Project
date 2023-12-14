import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherForm!: FormGroup;
  weatherResult: any;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherForm = this.formBuilder.group({
      cityName: ['', [Validators.required]],
    });
  }
  search() {
    this.weatherService
      .searchWeather(this.weatherForm.value)
      .subscribe((data) => {
        console.log('here response from api', data);
        this.weatherResult = data.result;
      });
  }
}
