import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Clear, Check } from '@mui/icons-material'
import {Box, IconButton, ListItem, TextField, Typography } from '@mui/material';

const ReadOnlyTask = ({ task, setEditTaskId, onDelete }) => {
    return <ListItem 
                key={task.task_id} 
                sx={{
                    width: "600px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    padding: "15px",
                    border: "1px solid #ddd",
                    transition: "opacity .2s ease-in-out",
                    backgroundColor: "#AC94F4",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    "&:hover": { 
                        backgroundColor: "#e3f2fd",
                        transition: ".2s ease-in-out"
                    }
                }}
            >
                <Typography
                            sx={{
                                color: "black",
                                fontSize: "20px",
                                marginLeft: "15px"
                            }}
                        >
                            {task.task}
                </Typography>
                <Box
                    sx={{
                        display: "inline-block"
                    }}
                >
                    <IconButton onClick={() => setEditTaskId(task.task_id)}>
                        <EditIcon color='primary' />
                    </IconButton>
                    <IconButton onClick={() => onDelete(task.task_id)}>
                        <DeleteIcon color='error' />
                    </IconButton>
                </Box>
            </ListItem>
}

export default ReadOnlyTask;