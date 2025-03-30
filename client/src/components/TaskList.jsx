import {List, ListItem, ListItemText } from '@mui/material';

const TaskList = ({ tasks }) => {
    return <List>
        {tasks.map((item, index) => (
            <ListItem key={index}>
                <ListItemText>{item.task}</ListItemText>
                <button>Edit</button>
                <button>Delete</button>
            </ListItem>
        ))}
    </List>
}

export default TaskList;