import { response } from "express";
import grid from 'gridfs-stream';
const url = 'http://localhost:8000';

import mongoose from "mongoose";
let gfs,gridfsBucket;
const connn=mongoose.connection;
connn.once('open',()=>{
     gridfsBucket = new mongoose.mongo.GridFSBucket(connn.db, {
        bucketName: 'fs'
    });

    gfs=grid(connn.db,mongoose.mongo)
    gfs.collection('fs')

})


export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json({ filename: request.file.filename, url: imageUrl });
}



export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}
