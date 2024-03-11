package com.weather.com;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class WeatherServiceShould {
    @Mock
    private WeatherAPI weatherAPI;
    private WeatherService weatherService;

    @BeforeEach
    public void init(){
        weatherService = new WeatherService(weatherAPI);
    }

    @Test
    @DisplayName("call the http client and get weather by zip code in realtime")
    void call_the_http_client_and_get_weather_by_zip_code_in_realtime() {
        weatherService.getByZip("01581");
        verify(weatherAPI).getByQuery("01581");
    }

}

