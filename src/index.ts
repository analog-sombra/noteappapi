import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express, { Request, Response } from 'express';
import { noteRouter } from './routers/notes';
import helmet from "helmet";
import cors from "cors";
import "dotenv";

const PORT = process.env.PORT || 8080;

const app = express();
//middlewhare
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(helmet());


//routers
app.use(noteRouter);



app.get("/", (req: Request, res: Response) => {
    res.send("welcome to my note application");
});

//routes


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})

export { prisma };