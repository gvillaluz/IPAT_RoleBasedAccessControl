import { Container, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react'
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState({});
    return <Container>
        <Box 
            sx={
                { 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2, 
                    width: 350,
                    border: "1px lightgray solid", 
                    padding: "40px",
                    borderRadius: "6px"
                }
            }
        >
            <Typography>Welcome, {user.username}</Typography>
            <TaskList tasks={tasks} />
        </Box>
    </Container>
}

export default Dashboard;