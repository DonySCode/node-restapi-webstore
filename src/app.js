import express from "express";
import config from "./config.js";

import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/products.routes.js'

const app = express();

//configuracion
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(categoriesRoutes);
app.use(productsRoutes);

export default app;