package com.rojagaar.serialization;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import org.bson.types.Binary;

import java.io.IOException;

public class BinaryDeserializer extends JsonDeserializer<Binary> {
    @Override
    public Binary deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException, JsonProcessingException {
        ObjectCodec codec = jsonParser.getCodec();
        JsonNode node = codec.readTree(jsonParser);
        byte[] imageData = node.get("data").binaryValue(); // Assuming the image data is stored in a field named "data"
        return new Binary(imageData);
    }
}
