import express, { Request, Response, json } from "express";
import randomRoute from "./routes/random-route";

const app = express();
app.use(json())
app.use(randomRoute)
app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm ok!");
});

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is up and ready to serve! On port ${port}`);
})