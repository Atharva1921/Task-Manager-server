import { Router } from "express"
import {createTask,deleteTask,getTask,getTasks,updateTask} from '../controllers/taskController.js'


const taskRouter = Router();

taskRouter.route('/create').post(createTask);

taskRouter.route('/').get(getTasks);

taskRouter.route('/:name').get(getTask);

taskRouter.route('/update').put(updateTask)

taskRouter.route('/delete/:name').delete(deleteTask);


export default taskRouter;