package com.weather.com;

import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import jakarta.inject.Inject;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


import static org.assertj.core.api.Assertions.assertThat;

@MicronautTest
public class WeatherControllerTest {
    @Inject
    @Client("/")
    HttpClient client;

    @Test
    @DisplayName("retrieves weather by zip code")
    void retrieves_weather_by_zip_code() {
        Weather weather = client.toBlocking().exchange("/weather/zip/01581", Weather.class).body();
        assertThat(weather.location().name()).isEqualTo("Westborough");
    }
}
