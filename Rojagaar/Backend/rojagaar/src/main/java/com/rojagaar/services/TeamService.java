package com.rojagaar.services;

import com.rojagaar.model.Team;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.TeamInfo;

import java.util.List;

public interface TeamService {
    public void createTeam(Team team);
    public ApiResponse joinTeam(String teamId,String userName);
    public List<TeamInfo> getAllTeam();
}
