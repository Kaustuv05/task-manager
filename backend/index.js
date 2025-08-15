const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRoutes = require('./src/routes/auth');
const taskRoutes = require('./src/routes/taskRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Optional: helps fail fast if DB is unreachable
})
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Stop the server if DB connection fails
    });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
