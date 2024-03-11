package com.weather.com;

import io.micronaut.serde.annotation.Serdeable;

@Serdeable
public record Weather(Location location) {
}
