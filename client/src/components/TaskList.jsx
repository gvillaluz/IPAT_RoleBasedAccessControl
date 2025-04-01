import {Box, IconButton, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const TaskList = ({ tasks }) => {
    return (
        tasks.length !== 0 ? (
            <List>
                {tasks.map(item=> (
                    <ListItem 
                        key={item.id} 
                        sx={{
                            width: "600px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: 'center',
                            padding: "15px",
                            border: "1px solid #ddd"
                        }}
                    >
                        <Typography
                            sx={{
                                color: "black",
                                fontSize: "20px",
                                marginLeft: "15px"
                            }}
                        >
                            {item.task}
                        </Typography>
                        <Box
                            sx={{
                                display: "inline-block"
                            }}
                        >
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </ListItem>
                ))}
            </List>
        ) : (
            <div>
                <Typography
                    sx={
                        {
                            color: "black"
                        }
                    }
                >
                    Nothing to do! Add a task to stay productive.
                </Typography>
            </div>
        )
    )
}

export default TaskList;