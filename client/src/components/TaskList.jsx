import { List, Typography } from '@mui/material';
import { useState } from 'react';
import { editTask } from '../services/serviceAPI';
import ReadOnlyTask from './ReadOnlyTask';
import EditTask from './EdtiTask';

const TaskList = ({ tasks, onEdit, editTaskId, setEditTaskId, onDelete }) => {
    return (
        tasks.length !== 0 ? (
            <List>
                {tasks.map(item => (
                    editTaskId !== item.task_id ? (
                        <ReadOnlyTask key={item.task_id} task={item} setEditTaskId={setEditTaskId} onDelete={onDelete} />
                    ) : (
                        <EditTask key={item.task_id} task={item} onEdit={onEdit} setEditTaskId={setEditTaskId} />
                    )
                ))}
            </List>
        ) : (
            <div>
                <Typography
                    sx={
                        {
                            color: "white",
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