import express from 'express';
import { addUser } from '../controller/userController.js';
import { getDetails } from '../controller/userController.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';
import upload from '../utils/upload.js'
import { getImage, uploadImage } from '../controller/image-controller.js';
const route=express.Router()

route.post('/add',addUser)
route.get('/users',getDetails)
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)

route.post('/message/add',newMessage)
route.get('/message/get/:id',getMessages)
route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);



export default route