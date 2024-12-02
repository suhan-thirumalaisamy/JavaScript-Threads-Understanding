import express from 'express';
import {PORT} from './config';

const app = express();

app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});