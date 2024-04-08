package com.rojagaar.payload;

import com.rojagaar.model.Team;
import com.rojagaar.model.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeamInfo {
    private Team team;
    private User user;
}
