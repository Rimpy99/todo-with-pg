import express from 'express';

const router = express.Router();

router.get('/todos', getTodos);
router.post('/add', addTodo);
router.put('/:id/change', changeTodo);
router.delete('/:id/delete', deleteTodo);

export default router;