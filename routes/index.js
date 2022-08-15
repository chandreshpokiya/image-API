import express from 'express';
import { addUser } from '../controllers/userController.js';
import categoryRoutes from './category.js';
import imageRoutes from './image.js';

const routes = express.Router();

routes.get('/user', (req, res) => res.send('hello from routes'));
routes.post('/user', addUser);

routes.use('/category', categoryRoutes);
routes.use('/images', imageRoutes);

export default routes;
