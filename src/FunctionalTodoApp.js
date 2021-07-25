// import React from 'react';
import { useState } from 'react';

import FunctionalTaskRow from './FunctionalTodo/FunctionalTaskRow.js';
import FunctionalAddTaskForm from './FunctionalTodo/FunctionalAddTaskForm.js';


const FunctionalTodoApp = (props) => {

    const [tasks, setTasks] = useState([
        {name: "eat", status: "pending"},
        {name: "code", status: "pending"},
        {name: "sleep", status: "done"},
    ])

    const addTask = (newTask) => {
        const taskCopy = [...tasks];
        taskCopy.push(newTask);

        setTasks(taskCopy)
    }

    const deleteTask = (task) => {
        const i = tasks.indexOf(task)
        const taskCopy = [...tasks];
        taskCopy.splice(i,1)
        setTasks(taskCopy)
    }

    const markDoneTask = (task) => {
        const index = tasks.indexOf(task)
        const tasksCopy = [...tasks]
        tasksCopy[index].status = "done"
        setTasks(tasksCopy) 
    }

    const pendingTask = tasks.filter(task => task.status === 'pending')
    const pendingTaskList = pendingTask.map(task =>
        <FunctionalTaskRow key={task.id} task={task} deleteTask={deleteTask} markDoneTask={markDoneTask} />
    )
    const doneTask = tasks.filter(task => task.status === 'done')
    const doneTaskList = doneTask.map(task =>
        <FunctionalTaskRow key={task.id} task={task} deleteTask={deleteTask} />
    )

    return(
        <div>
            <div>
                <table border="1">
                        <thead>
                            <tr>
                                <th colSpan="2">Add Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FunctionalAddTaskForm addTask={addTask} />
                        </tbody>
                    </table>
            </div> <br />
            <div id="display">
                {pendingTask == '' ? <p>No Pending Task</p> :
                    <table border="1">
                        <thead>
                            <tr>
                                <th colSpan="2">Pending Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingTaskList}
                        </tbody>
                    </table>
                }

                {doneTask == '' ? <p>No Done Task</p> :
                    <table border="1">
                        <thead>
                            <tr>
                                <th colSpan="2">Done Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doneTaskList}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default FunctionalTodoApp;