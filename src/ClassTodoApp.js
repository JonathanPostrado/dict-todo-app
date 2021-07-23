import React from 'react';
import ClassTaskRow from './ClassTodo/ClassTaskRow.js';
import ClassAddTaskForm from './ClassTodo/ClassAddTaskForm.js';


class ClassTodoApp extends React.Component{

    state = {
        tasks: [
        ],
    }
    
    changeDisplay = (category) => {
        this.setState({
            filter: category
        });
    }

    addTask = (newTask) => {
        newTask.id = this.state.tasks.length + 1;
        let taskCopy = [...this.state.tasks];
        taskCopy.push(newTask);
        // console.log(taskCopy);
        this.setState({
            tasks : taskCopy,
        });
    }

    deleteTask = (task) => {
        let taskCopy = [...this.state.tasks];
        taskCopy = taskCopy.filter(i => i.id !== task.id);
        this.setState({
            tasks: taskCopy,
        });
    }

    doneTask = (task) => {
        let taskCopy = [...this.state.tasks];
        let index = taskCopy.findIndex(i => i.id === task.id);
        taskCopy[index].status = 'done';
        this.setState({
            tasks: taskCopy,
        });
    }

    render() {
        let pendingTask = this.state.tasks.filter(task => task.status === 'pending')
        let pendingTaskList = pendingTask.map(task =>
            <ClassTaskRow key={task.id} task={task} deleteTask={this.deleteTask} doneTask={this.doneTask} />
        )
        let doneTask = this.state.tasks.filter(task => task.status === 'done')
        let doneTaskList = doneTask.map(task =>
            <ClassTaskRow key={task.id} task={task} deleteTask={this.deleteTask} />
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
                                <ClassAddTaskForm addTask={this.addTask} />
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

}

export default ClassTodoApp;