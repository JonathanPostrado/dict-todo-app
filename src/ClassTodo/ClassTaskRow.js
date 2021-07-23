import React from 'react';

class ClassTaskRow extends React.Component {

    doneClickHandler = () => {
        this.props.doneTask(this.props.task);
    }
    deleteClickHandler = () => {
        this.props.deleteTask(this.props.task);
    }

    render(){
        let {name, status} = this.props.task;
        return(
            <tr>
                <td className="custom-td">{name}</td>
                <td className="custom-td" id="actions">
                    {status === 'pending' ? <i className="icon fas fa-check-circle" id="check_done" onClick={this.doneClickHandler}></i> : null}
                    <i className="icon fas fa-trash-alt" id="delete_task" onClick={this.deleteClickHandler}></i>
                </td>
            </tr>
        )
    }

}

export default ClassTaskRow;