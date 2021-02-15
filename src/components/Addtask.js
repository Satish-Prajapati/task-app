function Addtask({onAdd}) {

    const submitTask = (e) => {
        e.preventDefault()
        // console.log('Test')
        const task = {
            text: e.target.elements.task.value,
            day: e.target.elements.day.value,
            reminder: e.target.elements.reminder.checked
        }
        onAdd(task)
    }

    return (
        <form className='add-form' onSubmit={submitTask}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" name="task" placeholder='Add Task'required/>
            </div>
            <div className='form-control'>
                <label>Day  & Time</label>
                <input type="text" name="day" placeholder='Add Day & Time'required/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" name="reminder" />
            </div>
            <button type='submit' className='btn btn-block'>Save Task</button>
        </form>
    )
}

export default Addtask
