import { Container, TextField, Button, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/serviceAPI';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await loginUser(email, password);
            if (response.success) {
                localStorage.setItem("token", response.token)
                navigate("/user/dashboard");
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
                    Login Form
                </Typography>
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
                <Button type="submit" variant="contained" color="primary" onClick={handleLogin}>
                    Login
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
                    Don't have an account? <Link to="/">Register here</Link>
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

export default LoginPage;