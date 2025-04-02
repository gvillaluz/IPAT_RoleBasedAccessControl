import {Box, Button, IconButton, List, ListItem, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Clear, Check } from '@mui/icons-material'
import { useState } from 'react';

const TaskList = ({ tasks, onDelete }) => {
    const [updatedTask, setUpdatedTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = (taskId) => {
        alert(taskId)
        setIsEditing(false)
    }

    return (
        tasks.length !== 0 ? (
            <List>
                {tasks.map(item => (
                    <ListItem 
                        key={item.task_id} 
                        sx={{
                            width: "600px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: 'center',
                            padding: "15px",
                            border: "1px solid #ddd",
                            transition: "opacity .2s ease-in-out",
                            backgroundColor: "#f9f9f9",
                            "&:hover": { backgroundColor: "#e3f2fd" }
                        }}
                    >
                        {
                            !isEditing ? (
                                <Typography
                                    sx={{
                                        color: "black",
                                        fontSize: "20px",
                                        marginLeft: "15px"
                                    }}
                                >
                                    {item.task}
                                </Typography>
                            ) : (
                                <TextField 
                                    placeholder={item.task}
                                    variant='standard'
                                    InputProps={{
                                        disableUnderline: true,
                                      }}
                                    sx={{
                                        backgroundColor: "transparent",
                                        margin: "4px",
                                        width: "450px",
                                        height: "inherit"
                                    }}
                                    onBlur={() => setIsEditing(false)}
                                    onChange={(e) => setUpdatedTask(e.target.value)}
                                />
                            )
                        }
                        {
                            !isEditing ? (
                                <Box
                                    sx={{
                                        display: "inline-block"
                                    }}
                                >
                                    <IconButton onClick={() => setIsEditing(true)}>
                                        <EditIcon color='primary' />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(item.task_id)}>
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: "inline-block"
                                    }}
                                >
                                    <IconButton
                                        onClick={() => handleEdit(item.task_id)}
                                    >
                                        <Check color="primary" />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => setIsEditing(false)}
                                    >
                                        <Clear color="error" />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </ListItem>
                ))}
            </List>
        ) : (
            <div>
                <Typography
                    sx={
                        {
                            color: "black",
                            fontSize: "20px"
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