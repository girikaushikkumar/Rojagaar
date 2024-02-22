package com.rojagaar.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

//  http://localhost:8080/swagger-ui/index.html
@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Kaushik",
                        email = "kaushikkumargiri38@gmail.com"
                ),
                description = "OpenApi documentation for Rojagaar",
                title = "OpenApi specification for Rojagaar",
                version = "1.0"
        ),
        servers = {
                @Server(
                        description = "Local Env",
                        url = "http://localhost:8080"

                )
        }
)
public class OpenApiConfig {
}
