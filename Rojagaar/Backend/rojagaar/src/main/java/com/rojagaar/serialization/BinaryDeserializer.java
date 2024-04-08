package com.rojagaar.serialization;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.bson.types.Binary;

import java.io.IOException;

public class BinaryDeserializer extends JsonDeserializer<Binary> {
    @Override
    public Binary deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        byte[] data = jsonParser.getBinaryValue();
        return new Binary(data);
    }
}
