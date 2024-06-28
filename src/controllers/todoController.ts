import { Request, Response } from 'express';
import { Todo } from '../todo.js';

let todos: Todo[] = [
  { id: 1, text: 'Learn TypeScript' },
  { id: 2, text: 'Build a REST API' },
];

export const getAllTodos = (req: Request, res: Response): void => {
  res.json(todos);
};

export const getTodoById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const addTodo = (req: Request, res: Response): void => {
  const text: string = req.body.text;
  const newTodo: Todo = {
    id: todos.length + 1,
    text: text
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].text = text;
    res.json(todos[todoIndex]);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const deleteTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).send('Todo not found');
  }
};
