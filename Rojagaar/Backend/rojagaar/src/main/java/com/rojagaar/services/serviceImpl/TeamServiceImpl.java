package com.rojagaar.services.serviceImpl;

import com.rojagaar.model.Team;
import com.rojagaar.model.User;
import com.rojagaar.payload.ApiResponse;
import com.rojagaar.payload.TeamInfo;
import com.rojagaar.repository.TeamRepo;
import com.rojagaar.repository.UserRepo;
import com.rojagaar.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {
    @Autowired
    private TeamRepo teamRepo;
    @Autowired
    private UserRepo userRepo;

    @Override
    public void createTeam(Team team) {
        this.teamRepo.save(team);
    }

    @Override
    public ApiResponse joinTeam(String teamId, String userName) {

        Team team = teamRepo.findById(teamId).orElse(null);
        User user = this.userRepo.findByUserName(userName).orElse(null);
        if (user == null) {
            return new ApiResponse("User not found");
        }

        if (team == null) {
            return new ApiResponse("Team not found");
        }
//        System.out.println(team.getJoinRequest().size());
        if(team.getTeamMember()!= null ){
            for (User user1 : team.getTeamMember()) {
                if(user1.getUsername().equals(user.getUsername()))
                    return new ApiResponse("You are already a member of this team");
            }

        }

        if (team.getJoinRequest() != null ) {
            for(User user1 : team.getJoinRequest()) {
                if(user1.getUsername().equals(user.getUsername()))
                    return new ApiResponse("You have already sent a request to join this team");
            }
        }
        if (team.getJoinRequest() == null) {
            team.setJoinRequest(new ArrayList<>());
        }

        team.getJoinRequest().add(user);

        this.teamRepo.save(team);
        return new ApiResponse("Request sent successfully.");
    }

    @Override
    public List<TeamInfo> getAllTeam() {
        List<Team> teams = this.teamRepo.findAll();
        List<TeamInfo> teamInfos = new ArrayList<>();
        for (Team team : teams) {
            User user = this.userRepo.findByUserName(team.getLeaderId()).orElse(null);
            if (user != null) {
                TeamInfo teamInfo = new TeamInfo();
                teamInfo.setTeam(team);
                teamInfo.setUser(user);
                teamInfos.add(teamInfo);
            }
        }
        return teamInfos;
    }
}
