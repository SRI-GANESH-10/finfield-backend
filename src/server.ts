import app from "./app";
import mongoose from 'mongoose'

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI as string);
        console.log("Connected to the db..")
    } catch (error) {
        console.log("error connecting to the db")
    }
}

const startServer = async () =>{
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}

startServer();