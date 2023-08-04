import express from 'express';
import pool from './db';

const app = express();

app.listen(6000, () => {
    console.log('server listening on port 6000!')
})