import './config.js';
import express from "express";
import { initDB } from "./DB/dataSource.js";
import usersRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js'
import productRoiter from './routes/productrouter.js';
import orderItemRouter from './routes/orderItemRouter.js';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/users', usersRouter);
app.use('/product', productRoiter);
app.use('/orderItem', orderItemRouter);
app.use('/orders', orderRouter);






app.listen(PORT, () => {
    console.log(`APP is listining in port ${PORT}`);
    initDB();
});

export default app;