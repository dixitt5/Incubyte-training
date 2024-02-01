package com.example;

import io.micronaut.core.annotation.Introspected;

@Introspected
public record ProductRequest(String name) {
}
