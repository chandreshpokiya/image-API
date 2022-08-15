import express from 'express';
import { addImage, viewImages } from '../controllers/imageController.js';

const routes = express.Router();

routes.post('/addImage', addImage);
routes.get('/', viewImages);

export default routes;
