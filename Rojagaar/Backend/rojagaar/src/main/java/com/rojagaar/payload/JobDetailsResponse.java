package com.rojagaar.payload;

import com.rojagaar.model.Photo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobDetailsResponse {
    private JobDto jobDto;
    private String JobPosterName;
    private Photo JobPosterPhoto;
}
