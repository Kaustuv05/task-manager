import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState('');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('https://taskpilot-xkdu.onrender.com/api/tasks', {
        params: { page, limit, status, q, sort },
      });
      setTasks(data.data); // backend sends { data: [...], page, limit, totalPages }
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page, limit, status, q, sort]);

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

        {/* Filters */}
        <div className="task-filters">
          <div className="filter-group">
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Search:</label>
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="filter-group">
            <label>Sort by:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Default</option>
              <option value="dueDate">Due Date (Asc)</option>
              <option value="-dueDate">Due Date (Desc)</option>
              <option value="createdAt">Created At (Asc)</option>
              <option value="-createdAt">Created At (Desc)</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="task-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Urgency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description || '—'}</td>
                    <td><span className={`task-status ${task.status}`}>{task.status}</span></td>
                    <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '—'}</td>
                    <td>{task.urgencyScore ?? '—'}</td>
                    <td>
                      <button onClick={() => openModal(task)}>Edit</button>
                      <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6">No tasks found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages}>
            Next
          </button>
        </div>

        {/* Modal Form */}
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