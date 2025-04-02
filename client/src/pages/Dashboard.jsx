import { Container, Box, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList';
import { getTasks, deleteTask } from '../services/serviceAPI';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState({});
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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return <Container>
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
                        color: "black",
                        fontSize: "35px"
                    }
                }
            >
                Welcome! {user.username}
            </Typography>
            <Button
                color="error"
                variant='contained'
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Box>
        <Box 
            sx={
                { 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2, 
                    width: 600,
                    border: "1px lightgray solid", 
                    padding: "30px 80px 80px",
                    margin: "25px",
                    borderRadius: "6px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }
            }
        >  
            <Input tasks={tasks} setTasks={setTasks} userId={user.id} />
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </Box>
    </Container>
}

export default Dashboard;