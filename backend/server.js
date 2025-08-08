const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

// Serve static frontend in production (single-service deployment)
const staticDir = path.resolve(__dirname, '../client/dist');
app.use(express.static(staticDir));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
