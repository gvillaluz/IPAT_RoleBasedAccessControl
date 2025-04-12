import { Container, Box, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList';
import { getTasks, deleteTask, editTask } from '../services/serviceAPI';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState({});
    const [editTaskId, setEditTaskId] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
       const getUserTasks = async () => {
            try {
                const response = await getTasks();
                setTasks(response.tasks)
                setUser(response.user)
            } catch (err) {
                alert("Token Expired.");
                navigate("/");
            }
       }

       getUserTasks();
    }, [navigate]);

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(prevTasks => prevTasks.filter(task => task.task_id !== taskId));
        } catch (err) {
            console.log(err.message)   
        }
    }

    const handleEdit = async (taskId, newValue) => {
        try {
            const response = await editTask(taskId, newValue);
            const updatedTask = tasks.map(task => (
                task.task_id === taskId ? { ...task, task: newValue } : task
            ))

            setTasks(updatedTask)

        } catch (err) {
            console.log(err)
        }
        setEditTaskId(null)
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return <Container
        sx={{
            margin: "30px auto"
        }}
    >
        <Box
            sx={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: "auto 25px"
            }}
        >
            <Typography
                variant='h4'
                sx={
                    {
                        color: "white",
                        fontSize: "35px"
                    }
                }
            >
                Welcome! {user.username}
            </Typography>
            <Button
                color="secondary"
                variant='contained'
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: "auto 25px"
            }}
        >
            <Typography
                variant='h6'
                sx={
                    {
                        color: "white",
                        fontSize: "25px"
                    }
                }
            >
                Position: {user.role}
            </Typography>
        </Box>
        <Box 
            sx={
                { 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2, 
                    width: 600,
                    padding: "30px 80px 80px",
                    margin: "25px",
                    borderRadius: "6px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                    backgroundColor: "#371F76"
                }
            }
        >  
            <Input tasks={tasks} setTasks={setTasks} userId={user.id} />
            <TaskList tasks={tasks} onEdit={handleEdit} editTaskId={editTaskId} setEditTaskId={setEditTaskId} onDelete={handleDelete} />
        </Box>
    </Container>
}

export default Dashboard;