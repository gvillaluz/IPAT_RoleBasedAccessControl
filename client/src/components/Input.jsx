import { Box, Button, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { addTask } from "../services/serviceAPI";

const Input = ({ tasks, setTasks, userId }) => {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = async () => {
        if (newTask.trim() === "") return

        try {
            const response = await addTask(newTask, userId);
            const addedTask = {
                id: response.taskId,
                task: newTask
            }
            setTasks([...tasks, addedTask])
            setNewTask("");
        } catch (err) {
            alert(err.message)
        }
    }

    return <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "auto",
            width: "330px",
            margin: "30px auto 60px"
        }}
    >
        <OutlinedInput 
            value={newTask}
            sx={{
                height: "36px"
            }} 
            onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>Add Task</Button>
    </Box>
}

export default Input;