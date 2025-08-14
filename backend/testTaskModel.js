const mongoose = require('mongoose');
require('dotenv').config();
const Task = require('./src/models/Task');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB");

    const task = new Task({
      title: 'Finish project',
      isImportant: true,
      dueDate: new Date(Date.now() + (5 * 24 * 60 * 60 * 1000)), // 5 days from now
      status: 'in-progress'
    });

    console.log('Due in days:', task.dueInDays); // should be ~5
    console.log('Urgency score:', task.urgencyScore); // 10 + (30 - 5) = 35

    await task.save();
    console.log("Task saved to DB");
    
    mongoose.connection.close();
  })
  .catch(err => console.error(err));