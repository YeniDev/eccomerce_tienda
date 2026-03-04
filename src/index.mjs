import 'dotenv/config';
import express from 'express';
import { conectar } from "./config/database.js";
import ecommerceRoutes from "./routes/ecommerceRoutes.js";
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', ecommerceRoutes);

conectar();

//Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});