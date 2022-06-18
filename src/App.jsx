import React, {useState, useEffect} from 'react';
import {TaskCreator} from './components/TaskCreator.jsx';
import {TaskTable} from './components/TaskTable.jsx';
import {VisibilityControl} from './components/VisibilityControl.jsx';
import {Conteiner} from './components/Conteiner.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



function App() {
 
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){
    setTasksItems([...tasksItems, {name:taskName, done:false}]);
    }
  }

const toggleTask = task => {
  setTasksItems(
  tasksItems.map(t => (t.name === task.name) ? {...t, done: !t.done} :t)
    );
};

useEffect(() =>{
  let data = localStorage.getItem('tasks');
  if(data){
    setTasksItems(JSON.parse(data));
  }
}, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  }
  
useEffect(() =>{
localStorage.setItem('tasks', JSON.stringify(tasksItems))
}, [tasksItems])


  return (
    <body className="bg-dark text-white">

     <Conteiner>
     
      <TaskCreator createNewTask={createNewTask} />

      <TaskTable tasks= {tasksItems} toggleTask={toggleTask}  />

      <VisibilityControl 
        isChecked = {showCompleted}
        setShowCompleted = {(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
        />
        
      
      {
        showCompleted === true && (<TaskTable tasks= {tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />)
      }
     
     
     
     </Conteiner>
     
     
    
      
    </body>
  );
}

export default App;