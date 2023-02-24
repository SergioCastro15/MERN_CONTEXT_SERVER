import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';
import cors from 'cors';

const app = express();

// habilitar cors
app.use(cors());
// middleware
app.use(express.json())


// useTempFiles debe ir en true para que detecte el archivo y tempFileDir es la carpeta donde vamos a guardar el archivo
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

// routes
app.use(postsRoutes);

export default app;