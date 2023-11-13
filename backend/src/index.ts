import "dotenv/config";
import { Request, Response } from "express-serve-static-core";
import { AppDataSource } from "./data-source";
import router from "./route";
import express = require('express');

AppDataSource.initialize().then(async () => {
const app = express();
const port = 5000;
let cors=require('cors');

app.use(cors());

app.use(express.json());
app.use("/", router);
app.use('uploads', express.static('uploads'));
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World! from Integration Testing of React-Express");
});
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});

}).catch(error => console.log(error))
