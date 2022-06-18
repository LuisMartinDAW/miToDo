import React from 'react';
import {TaskRow} from './TaskRow.jsx'; 

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) =>{

  const taskTableRows = (doneValue) => {
    console.log(doneValue)
    return(
      tasks
      .filter(task => task.done === doneValue)
      .map(task => (

          <TaskRow task = {task}  key={task.name} toggleTask={toggleTask}/>
          
        ))
    )
  }

  return(

    <table className="table table-dark table-striped table-bordered border-secundary">
          <thead>
              <tr className="table-primary">
              <th>Task</th>
              </tr>
          </thead>
           <tbody>
              {
                taskTableRows(showCompleted)
              }
              
          </tbody>
          
      </table>

    
  )
}