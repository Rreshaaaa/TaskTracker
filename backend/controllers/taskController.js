const Tasks = require('../models/Tasks');
const Task = require('../models/Tasks');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}
exports.createTasks = async (req, res) => {
    const tasks = await Task.create(req.body);
    res.json(tasks);
}
exports.updateTasks = async (req, res) => {
    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(tasks);
}
exports.deleteTasks = async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id);
    res.json({ message: "Tasks deleted successfully"});
}