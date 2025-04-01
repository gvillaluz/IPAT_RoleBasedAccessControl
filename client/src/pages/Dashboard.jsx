import { Container, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList';
import { getTasks, addTask } from '../services/serviceAPI';
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
                navigate("/login");
            }
       }

       getUserTasks();
    }, [navigate]);

    return <Container>
        <Typography
            variant='h4'
            sx={
                {
                    color: "black"
                }
            }
        >
            Welcome! {user.username}
        </Typography>
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
                    borderRadius: "6px"
                }
            }
        >  
            <Input tasks={tasks} setTasks={setTasks} userId={user.id} />
            <TaskList tasks={tasks} />
        </Box>
    </Container>
}

export default Dashboard;