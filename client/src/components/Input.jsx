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
                task_id: response.taskId,
                user_id: userId,
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
            width: "370px",
            margin: "30px auto 60px"
        }}
    >
        <OutlinedInput 
            value={newTask}
            sx={{
                height: "36px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                backgroundColor: "#AC94F4",
                border: "#D1D5DB",
                width: "260px"
            }} 
            onChange={(e) => setNewTask(e.target.value)}
        />
        <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddTask}
            sx={{
                borderRadius: "5px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
            }}
        >
            Add Task
        </Button>
    </Box>
}

export default Input;