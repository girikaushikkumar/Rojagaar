package com.rojagaar.controller;

import com.rojagaar.model.Photo;
import com.rojagaar.services.serviceImpl.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("api/photo/")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @PostMapping("add")
    public String addPhoto(@RequestParam("image")MultipartFile image,@RequestParam String id) throws IOException {
        String photoId = this.photoService.addPhoto(image,id);
        return "redirect:/photos/" + photoId;
    }

    @GetMapping("get/{id}")
    public ResponseEntity<String> getPhoto(@PathVariable String id) {
        Photo photo = photoService.getPhoto(id);

        String image =  Base64.getEncoder().encodeToString(photo.getImage().getData());
        return ResponseEntity.ok(image);
    }
}
