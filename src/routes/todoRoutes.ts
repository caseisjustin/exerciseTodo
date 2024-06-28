import express from 'express';
import bodyParser from 'body-parser';
import * as todoController from '../controllers/todoController.js';

const router = express.Router();
router.use(bodyParser.json());

router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.post('/todos', todoController.addTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

export default router;
