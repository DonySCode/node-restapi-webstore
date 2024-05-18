import express from "express";
import { config } from "./config";

import productsRoutes from './routes/products.routes';
import categoriesRoutes from './routes/categories.routes';

const app = express();

//configuracion
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productsRoutes);
app.use(categoriesRoutes);

export default app;