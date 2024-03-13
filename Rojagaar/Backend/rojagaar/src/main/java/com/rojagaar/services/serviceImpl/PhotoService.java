package com.rojagaar.services.serviceImpl;

import com.rojagaar.exception.ResourceNotFoundException;
import com.rojagaar.model.Photo;
import com.rojagaar.model.User;
import com.rojagaar.repository.PhotoRepo;
import com.rojagaar.repository.UserRepo;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class PhotoService {
    @Autowired
    private PhotoRepo photoRepo;

    @Autowired
    private UserRepo userRepo;

    public String addPhoto(MultipartFile file,String id) throws IOException {
        Photo photo = new Photo();
        photo.setImage(
                new Binary(BsonBinarySubType.BINARY,file.getBytes())
        );
        photo = this.photoRepo.insert(photo);
        User user = this.userRepo.findByUserName(id).orElseThrow(()->new ResourceNotFoundException("Id","",id));
        user.setImage(photo.getId());
        this.userRepo.save(user);
        return photo.getId();
    }

    public Photo getPhoto(String id) {
        return this.photoRepo.findById(id).get();
    }
}
