import dotenv from 'dotenv'
import express from "express";
import connectDB from "./config/connectDB.js";
import taskRouter from './routes/taskRoutes.js'
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/task', taskRouter)

const launchServer = async () => {
    try {
        // Database Connection
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
};

launchServer();
  
