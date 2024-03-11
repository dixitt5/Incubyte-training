package com.weather.com;

import jakarta.inject.Singleton;

@Singleton
public class WeatherService {
    WeatherAPI weatherAPI;

    public WeatherService(WeatherAPI weatherAPI) {
        this.weatherAPI = weatherAPI;
    }
    public Weather getByZip(String zip) {
        return weatherAPI.getByQuery(zip);
    }

}
