package com.rojagaar.controller;


import com.mongodb.client.gridfs.model.GridFSFile;
import com.rojagaar.model.LoadFile;
import com.rojagaar.services.serviceImpl.FileService;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.mongodb.core.query.Query;


import java.io.IOException;
import java.util.Calendar;

@RestController
@CrossOrigin("*")
@RequestMapping("api/image/")
public class FileController {
    @Autowired
    private FileService fileService;

    @Autowired
    private GridFsTemplate template;

    @Autowired
    private GridFsOperations operations;

    @PostMapping("upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file, @RequestParam String userName) throws IOException {
        return new ResponseEntity<>(fileService.addFile(file,userName), HttpStatus.OK);
    }

    @GetMapping("retrieve/{imageId}")
    public ResponseEntity<byte[]> getImageById(@PathVariable String imageId) throws IOException {
        LoadFile loadFile = fileService.downloadFile(imageId);
        if (loadFile.getFile() != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.valueOf(loadFile.getFileType()));
            return new ResponseEntity<>(loadFile.getFile(), headers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType() ))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }

    @GetMapping("downloadZipFile")
    public void downloadAsZip(HttpServletResponse response) throws IOException {

        //Getting the time in milliseconds to create the zip file name
        Calendar calendar = Calendar.getInstance();
        String zipFileName = calendar.getTimeInMillis() + ".zip";

        //set headers to the response
        response.setContentType("application/zip");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + zipFileName + "\"");

        //retrieve zip file to the response
        fileService.downloadFilesAsZip(response);

        //set status to OK
        response.setStatus(HttpServletResponse.SC_OK);

    }
}
