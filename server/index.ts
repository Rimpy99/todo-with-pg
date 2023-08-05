import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

const app = express();
app.use(express.json());
dotenv.config();
app.use(helmet());

app.use('/todo');

app.listen(process.env.PORT, () => {
    console.log('server listening on port 6000!')
});