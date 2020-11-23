const { Router } = require('express');

const router = Router();

const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks.controller');

router.get('/tasks', getTasks );
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;