import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const port = 3000;

app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
