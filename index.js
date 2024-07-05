import express from 'express';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js'
import TransaksiRoute from './routes/TransaksiRoute.js'

const app = express();
// menambahkan middleware
app.use(cors());
// agar dapat menerima request dalam format json
app.use(express.json());
app.use(ProductRoute);
app.use(TransaksiRoute);

app.listen(5000, ()=> console.log('server up dan running...'));