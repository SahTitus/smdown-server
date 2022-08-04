import express from 'express';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions.js'
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import credentials from './middleware/credentials.js'
import linkRoutes from './routes/link.js'
import linkAllow from './middleware/linkAllow.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(credentials);

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/convert', linkAllow, linkRoutes)

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
