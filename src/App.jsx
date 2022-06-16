import React, {useState, useEffect} from 'react';
import {TaskCreator} from './components/TaskCreator.jsx';
import './App.css';



function App() {
 
  const [tasksItems, setTasksItems] = useState([
   
     {name: 'mi primera tarea',  done: false},
     {name: 'mi segunda tarea',  done: false},
     {name: 'mi tercera tarea',  done: false},
    
  ]);

  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){
    setTasksItems([...tasksItems, {name:taskName, done:false}]);
    }
  }
  
useEffect(() =>{
localStorage.setItem('tasks', JSON.stringify(tasksItems))
}, [tasksItems])


  return (
    <div className="App">

      <TaskCreator createNewTask={createNewTask} />

      <table>
          <thead>
              <tr>
              <th>Task</th>
              </tr>
          </thead>
           <tbody>
              {
        tasksItems.map(task => (

          <tr key={task.name}>
            <td>
            {task.name}
            </td>
            
          </tr>
          
        ))
      }
              
          </tbody>
          
      </table>
      
      
    </div>
  );
}

export default App;