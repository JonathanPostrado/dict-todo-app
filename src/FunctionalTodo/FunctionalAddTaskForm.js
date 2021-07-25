// import React from 'react';
import { useState } from 'react';


const FunctionalAddTaskForm = (props) => {

    // const newAddedTask = {
    //     name: '',
    //     status: 'pending'
    // }

    // const [task, setTask] = useState({...newAddedTask})

    const [name, setName] = useState('')
    const [status, setStatus] = useState('pending')

    const addNewTask = (e) => {
        let newTask = {
            name: name,
            status: 'pending'
        }

        props.addTask(newTask);
    }

    return(
        <tr>
            <td className="custom-td">
                <span className="card-title blue-text">Task Name: </span>
                <input className="input-field" type="text" name="task" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="hidden" name="status" value={status} onChange={(e) => setStatus(e.target.value)} /> <br />
                <button className="btn blue btn-block" onClick={addNewTask}>Add Task</button>
            </td>
        </tr>
    )
}

export default FunctionalAddTaskForm;