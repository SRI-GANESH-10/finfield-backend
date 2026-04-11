import express , { type Request, type Response} from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.route'
import { errorMiddleware } from './middleware/error.middleware';
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config();

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        success:true,
        message:"Health is working fine..."
    })
})

app.use('/api/auth' , authRoutes)

app.use(errorMiddleware)


export default app;