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
        console.log(response.data)
        return response.data;
    } catch (err) {
        throw err;
    }
} 