import { Container, TextField, Button, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { registerUser } from '../services/serviceAPI';
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegistration = async () => {
        try {
            const results =  await registerUser(username, email, password);
            if (results.success) {
                alert("Registration successful! Proceed to login?");
                navigate("/login");
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    }

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
                <Typography sx={
                        {
                            fontSize: "1.8em",
                            color: "black",
                            mb: "20px"
                        }
                    }
                >
                    Registration Form
                </Typography>
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <TextField 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    label="Password" 
                    type="password"
                    variant="outlined" 
                    fullWidth 
                    required  
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button type="submit" variant="contained" color="primary" onClick={handleRegistration}>
                    Register
                </Button>
                <Typography
                    sx={
                        {
                            color: "black",
                            textAlign: "left",
                            fontSize: "14px"
                        }
                    }
                >
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography>
                <Typography
                    sx={
                        {
                            color: "red",
                            fontSize: "15px"
                        }
                    }
                >
                    {error}
                </Typography>
            </Box>
        </Container>
}

export default RegisterPage;