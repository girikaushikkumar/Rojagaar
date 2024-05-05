package com.rojagaar.controller;

import com.rojagaar.model.Team;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.TeamInfo;
import com.rojagaar.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/team/")
public class TeamController {
    @Autowired
    private TeamService teamService;

    @PostMapping("createTeam")
    public ResponseEntity<ApiResponse> createTeam(@RequestBody Team team) {
        System.out.println(team.toString());
        this.teamService.createTeam(team);
        return new ResponseEntity<>(new ApiResponse("Team created successfully"), HttpStatus.OK);
    }

    @PostMapping("joinRequest/{teamId}/{userName}")
    public ResponseEntity<ApiResponse> joinTeam(@PathVariable String teamId,@PathVariable String userName) {
        ApiResponse apiResponse = this.teamService.joinTeam(teamId,userName);
        return new ResponseEntity<>(apiResponse,HttpStatus.OK);
    }

    @GetMapping("getTeamInfo")
    public ResponseEntity<List<TeamInfo>> getTeamDetails() {
        List<TeamInfo> teamInfos = this.teamService.getAllTeam();
        return new ResponseEntity<>(teamInfos,HttpStatus.OK);
    }

    @GetMapping("getTeamsByLeaderId/{leaderId}")
    public ResponseEntity<List<Team>> getTeamsByLeaderId(@PathVariable String leaderId) {
        List<Team> teams = this.teamService.findTeamInfoByLeaderId(leaderId);
        return new ResponseEntity<>(teams,HttpStatus.OK);
    }
}
