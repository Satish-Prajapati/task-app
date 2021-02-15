import Task from "./Task";
function Tasks({tasks, onDelete, createBorder}) {
    return (
        <>
          {tasks.map(task => (
              <Task key={task.id} task={task} deleteTask={onDelete} toggleReminder={createBorder}></Task>
          ))}
        </>
    )
}

export default Tasks
