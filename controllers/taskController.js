import task from '../models/taskModel.js'

//Create Task
const createTask = async (req,res) => {
    try {
        const taskExists = await task.findOne({ name: req.body.name})
        if (taskExists) {
            res.status(409).json({msg : 'Task already exists.'});
        }
        else {
            const createdTask = await task.create(req.body);
            res.status(200).json({msg : `Task: ${req.body.name} CREATED.`});
        }
    } catch (error) {
        res.status(500).json({msg : error.message});
    }

};

//Get All tasks
const getTasks = async (req,res) => {
    try {
        const allTasks = await task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({msg : error.message});
    }
};

//Get Single task
const getTask = async (req,res) => {
    try {
        const {name} = req.params
        const singleTask = await task.find
        if ( singleTask ) {
            res.status(200).json(singleTask);
        }
        else {
            res.status(404).json({msg : `Task: ${name} NOT FOUND.`});
        }
        
    } catch (error) {
        res.status(500).json({msg : error.message});
    }
};

//Update task
const updateTask = async (req,res) => {
    try {
        const updateTask = await task.findOneAndUpdate({name : req.body.name},{completed : req.body.completed},{new : true},)
        if ( updateTask ) {
            res.status(200).json({msg : 'Task updated'});
        }
        else {
            res.status(404).json({msg : `Task: ${req.body.name} NOT FOUND.`});
        }

    } catch (error) {
        res.status(500).json({msg : error.message});
    }
};

//Delete task
const deleteTask = async (req,res) => {
    try {
        const deltask = await task.findOneAndDelete({name : req.params.name})
        if ( deltask ) {
            res.status(200).json({msg : 'Task deleted'});
        }
        else {
            res.status(404).json({msg : `Task: ${req.params.name} NOT FOUND.`});
        }

    } catch (error) {
        res.status(500).json({msg : error.message});
    }
};

export {createTask,deleteTask,getTasks,getTask,updateTask}