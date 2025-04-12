import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Clear, Check } from '@mui/icons-material'
import {Box, IconButton, ListItem, TextField } from '@mui/material';

const EditTask = ({ task, onEdit, setEditTaskId }) => {
    const [newTaskValue, setNewTaskValue] = useState(task.task)

    return <ListItem 
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
                <TextField 
                    value={newTaskValue}
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
                    onChange={(e) => setNewTaskValue(e.target.value)}
                />
                <Box
                    sx={{
                        display: "inline-block"
                    }}
                >
                    <IconButton
                        onClick={() => onEdit(task.task_id, newTaskValue)}
                    >
                        <Check color="primary" />
                    </IconButton>
                    <IconButton
                        onClick={() => setEditTaskId(null)}
                    >
                        <Clear color="error" />
                    </IconButton>
                </Box>
            </ListItem>
}

export default EditTask;