package com.weather.com;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class WeatherControllerShould {

    @Mock
    WeatherService weatherService;

    WeatherController weatherController;
    @BeforeEach
    public void init(){
        weatherController = new WeatherController(weatherService);
    }

    @Test
    @DisplayName("call the service method to find the weather by zip code")
    void call_the_service_method_to_find_the_weather_by_zip_code() {
        weatherController.getByZip("01581");
        verify(weatherService).getByZip("01581");
    }
}
