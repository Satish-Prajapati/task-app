import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";

function App() {
  const [showAddtask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 15 at 7PM',
      reminder: true
  },
  {
      id: 2,
      text: 'Buy Grocery',
      day: 'Feb 15 at 8PM',
      reminder: true
  },
  {
      id: 3,
      text: 'Meeting at school',
      day: 'Feb 16 at 3PM',
      reminder: false
  }])

  const deleteTask = (id) => {
    console.log(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => (
        task.id === id ? {...task, reminder: !task.reminder} : task
      ))
    )
  }

  const addTask = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      ...task
    }
    setTasks([newTask, ...tasks])
    // console.log(newTask)
  }

  return (
    <div className="container">
      <Header title='Task Tracker' showAdd={showAddtask} toggleAdd={() => setShowAddTask(!showAddtask)}/>
      {showAddtask && <Addtask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} createBorder={toggleReminder} /> : 'No Task'}
    </div>
  );
}

export default App;
