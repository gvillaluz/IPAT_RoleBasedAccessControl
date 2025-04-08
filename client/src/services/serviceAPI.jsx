import axios from 'axios'

const API_URL = "http://localhost:5000/api";

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, email, password }, { headers: { "Content-Type": "application/json" } })

        console.log(response.data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const loginUser = async (email, password) => {
    try  {
        const response = await axios.post(`${API_URL}/login`, { email, password }, { headers: { "Content-Type": "application/json" } })
        return response.data;
    } catch (err) {
        throw err;
    }
} 

export const getTasks = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/user/tasks`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const addTask = async (newTask, userId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${API_URL}/user/addTask`, { newTask,  userId}, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const editTask = async (taskId, newValue) => {
    try {
        console.log("editing task")
        const token = localStorage.getItem("token");
        const response = await axios.put(`${API_URL}/user/editTask`, {taskId, newValue}, {headers: { "Authorization": `Bearer ${token}` }})
        console.log(response.data.message)
        return response.data.message;
    } catch (err) {
        throw err;
    }
}

export const deleteTask = async (taskId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`${API_URL}/user/deleteTask/${taskId}`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data.message;
    } catch (err) {
        throw err;
    }
}