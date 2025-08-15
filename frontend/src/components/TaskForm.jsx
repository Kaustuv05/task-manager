import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

const TaskForm = ({ modalIsOpen, closeModal, task, refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');
  const [isImportant, setIsImportant] = useState(false);
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
      setIsImportant(task.isImportant);
      setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '');
    } else {
      setTitle('');
      setStatus('pending');
      setIsImportant(false);
      setDueDate('');
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, status, isImportant, dueDate };
    try {
      if (task) {
        await axios.put(`http://localhost:5001/api/tasks/${task._id}`, taskData);
      } else {
        await axios.post('http://localhost:5001/api/tasks', taskData);
      }
      refreshTasks();
      closeModal();
    } catch (error) {
      console.error('Failed to save task', error);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)} />
            Important
          </label>
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
};

export default TaskForm;
