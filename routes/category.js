import express from 'express';
import { addCategory, viewCategory } from '../controllers/categoryController.js';

const routes = express.Router();

routes.get('/allCategories', viewCategory);
routes.post('/addCategory', addCategory);

export default routes;
