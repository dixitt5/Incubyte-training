package com.weather.com;

import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.QueryValue;
import io.micronaut.http.client.annotation.Client;

@Client("http://api.weatherapi.com/v1/")
public interface WeatherAPI {
    @Get("current.json?&key=124f8334410e4ea186651413242202&aqi=no")
    Weather getByQuery(@QueryValue("q") String query);

}
