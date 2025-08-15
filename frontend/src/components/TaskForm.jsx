import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './TaskForm.css'; 

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
    <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <div className="modal-header">
        <h2 className="modal-title">{task ? 'Edit Task' : 'Add Task'}</h2>
        <button className="modal-close" onClick={closeModal} type="button">×</button>
      </div>
      
      <div className="modal-body">
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Title</label>
            <input 
              className="form-input"
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              placeholder="Enter task title..."
            />
          </div>

          <div className="form-field">
            <label className="form-label">Status</label>
            <select 
              className="form-select"
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className={`checkbox-field ${isImportant ? 'checked' : ''}`}>
            <input 
              className="custom-checkbox"
              type="checkbox" 
              checked={isImportant} 
              onChange={(e) => setIsImportant(e.target.checked)}
              id="important-checkbox"
            />
            <div className="checkbox-indicator"></div>
            <label className="checkbox-label" htmlFor="important-checkbox">
              Mark as Important
              {isImportant && <span className="priority-star">⭐</span>}
            </label>
          </div>

          <div className="form-field">
            <label className="form-label">Due Date</label>
            <input 
              className="form-input"
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
            />
          </div>
        </form>
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" type="button" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          {task ? 'Update Task' : 'Create Task'}
        </button>
      </div>
    </Modal>
  );
};

export default TaskForm;