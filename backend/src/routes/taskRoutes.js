
const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, dueDate, isImportant, status } = req.body;

    if (!title || !dueDate) {
      return res.status(400).json({
        message: 'Title and dueDate are required',
        errors: {
          title: !title ? 'Title is required' : undefined,
          dueDate: !dueDate ? 'DueDate is required' : undefined,
        },
      });
    }

    const task = new Task({ title, description, dueDate, isImportant, status });
    await task.save();
    res.status(201).json(task.toObject({ virtuals: true }));
  } catch (error) {
    res.status(400).json({ message: 'Failed to create task', errors: error.errors });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 5, status, q, sort } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = Math.min(parseInt(limit, 10), 10);

    const filter = {};
    if (status) {
      filter.status = status;
    }
    if (q) {
      filter.title = { $regex: q, $options: 'i' };
    }

    const sortOptions = {};
    if (sort) {
      const [field, order] = sort.startsWith('-') ? [sort.substring(1), -1] : [sort, 1];
      sortOptions[field] = order;
    }

    const totalItems = await Task.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / limitNum);

    const tasks = await Task.find(filter)
      .sort(sortOptions)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.json({
      data: tasks.map(task => task.toObject({ virtuals: true })),
      page: pageNum,
      limit: limitNum,
      totalItems,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Get a single task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task.toObject({ virtuals: true }));
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, description, dueDate, isImportant, status } = req.body;

    if (!title || !dueDate) {
      return res.status(400).json({
        message: 'Title and dueDate are required',
        errors: {
          title: !title ? 'Title is required' : undefined,
          dueDate: !dueDate ? 'DueDate is required' : undefined,
        },
      });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, isImportant, status },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task.toObject({ virtuals: true }));
  } catch (error) {
    res.status(400).json({ message: 'Failed to update task', errors: error.errors });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
