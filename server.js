import express from 'express';
import 'dotenv/config';
import './config/mongoose.js';
import cors from 'cors';
import routes from './routes/index.js';

const port = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => console.log(`listening on port ${port}`));
