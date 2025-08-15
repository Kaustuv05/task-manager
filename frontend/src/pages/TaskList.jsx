import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import './TaskList.css'; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [q, setQ] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:5001/api/tasks', {
        params: { page, status, q },
      });
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page, status, q]);

  const openModal = (task = null) => {
    setSelectedTask(task);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalIsOpen(false);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  return (
    <div className="task-list-container">
      <div className="task-list-wrapper">
        <div className="task-list-header">
          <h2 className="header-title">Task List</h2>
          <button className="add-task-btn" onClick={() => openModal()}>Add Task</button>
        </div>
        
        <div className="task-filters">
          <div className="filter-group">
            <label className="filter-label">Status:</label>
            <select className="filter-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Search:</label>
            <input className="filter-input" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>

        <div className="table-container">
          <table className="task-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(tasks) && tasks.map((task) => (
                <tr key={task._id}>
                  <td data-label="Title">
                    <div className="task-title">{task.title}</div>
                  </td>
                  <td data-label="Description">
                    <div className="task-description">{task.description}</div>
                  </td>
                  <td data-label="Status">
                    <span className={`task-status ${task.status}`}>{task.status}</span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button className="action-btn edit-btn" onClick={() => openModal(task)}>Edit</button>
                      <button className="action-btn delete-btn" onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-btn" onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <span className="page-info">Page {page}</span>
          <button className="pagination-btn" onClick={() => setPage(page + 1)}>Next</button>
        </div>

        <TaskForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          task={selectedTask}
          refreshTasks={fetchTasks}
        />
      </div>
    </div>
  );
};

export default TaskList;