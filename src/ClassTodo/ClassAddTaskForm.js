import React from 'react';

class ClassAddTaskForm extends React.Component{
    state = {
        name: '',
        status: 'pending'
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewTask = (e) => {
        let newTask = {
            name: this.state.name,
            status: 'pending'
        }

        this.props.addTask(newTask);
    }

    render() {
        return(
            <tr>
                <td className="custom-td">
                    <span className="card-title blue-text">Task Name: </span>
                    <input className="input-field" type="text" name="name" id="name" value={this.state.name} onChange={this.inputChangeHandler} />
                    <input type="hidden" name="status" value={this.state.status} /> <br />
                    <button className="btn blue btn-block" onClick={this.addNewTask}>Add Task</button>
                </td>
            </tr>
        )
    }
}

export default ClassAddTaskForm;