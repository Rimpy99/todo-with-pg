import express from 'express';
import { getTodos } from '../controllers/getTodos';
import { addTodo } from '../controllers/addTodo';
import { deleteTodo } from '../controllers/deleteTodo';

const router = express.Router();

router.get('/todos', getTodos);
router.post('/add', addTodo);
// router.put('/:id/change', changeTodo);
router.delete('/:id/delete', deleteTodo);

export default router;