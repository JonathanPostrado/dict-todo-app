// import React from 'react';
const FunctionalTaskRow = (props) => {

    const doneClickHandler = () => {
        props.markDoneTask(props.task);
    }
    const deleteClickHandler = () => {
        props.deleteTask(props.task);
    }

    const {name, status} = props.task
    // console.log(task)
    return(
        <tr>
            <td className="custom-td">{name}</td>
            <td className="custom-td" id="actions">
                {status === 'pending' ? <i className="icon fas fa-check-circle" id="check_done" onClick={doneClickHandler}></i> : null}
                <i className="icon fas fa-trash-alt" id="delete_task" onClick={deleteClickHandler}></i>
            </td>
        </tr>
    )
}

export default FunctionalTaskRow;