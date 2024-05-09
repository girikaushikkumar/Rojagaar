package com.rojagaar.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.rojagaar.serialization.BinaryDeserializer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Photo {
    @Id
    private String id;
    @JsonDeserialize(using = BinaryDeserializer.class)
    private Binary image;
}
