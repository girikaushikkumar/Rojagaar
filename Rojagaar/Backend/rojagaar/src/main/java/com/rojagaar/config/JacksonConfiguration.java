package com.rojagaar.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.rojagaar.serialization.BinaryDeserializer;
import org.bson.types.Binary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JacksonConfiguration {
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();

        SimpleModule module = new SimpleModule();
        module.addDeserializer(Binary.class, new BinaryDeserializer());
        objectMapper.registerModule(module);

        return objectMapper;
    }
}
