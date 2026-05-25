import { useState } from "react";
import TaskContext from '@/hooks/useTasks';

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prev) => [...prev, task]);
    };

    const deleteTask = (taskId) => {
        setTasks((prev) =>
            prev.filter((task) => task._id !== taskId)
        );
    };

    const updateTask = (updatedTask) => {
        setTasks((prev) =>
            prev.map((task) =>
                task._id === updatedTask._id
                    ? updatedTask
                    : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{
            tasks, setTasks, addTask, deleteTask, updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;