package com.rojagaar.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Team {
    @Id
    private String id;
    private String teamName;
    private String leaderId;
    private List<User> teamMember;
    private Photo photo;
    private List<String> roles;
    private List<User> joinRequest;
}
