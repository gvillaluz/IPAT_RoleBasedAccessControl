import { Container, TextField, Button, Box, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { useState } from 'react'
import { registerUser } from '../services/serviceAPI';
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "", 
        role: "Crew"
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAddFormValue = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setUser(prev => ({ ...prev, [name]: value}))
    }

    const handleRegistration = async () => {
        try {
            const results =  await registerUser(user.username, user.email, user.password, user.role);
            if (results.success) {
                alert("Registration successful! Proceed to login?");
                navigate("/");
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return <Container
        sx={{
            marginTop: "40px"
        }}
    >
        <Box 
            sx={
                { 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2, 
                    width: 350,
                    border: "1px lightgray solid", 
                    padding: "40px",
                    borderRadius: "6px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#AC94F4"
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
                name="username"
                variant="outlined" 
                fullWidth 
                required 
                value={user.username} 
                onChange={handleAddFormValue} 
            />
            <TextField 
                label="Email" 
                name="email"
                variant="outlined" 
                fullWidth 
                required 
                value={user.email} 
                onChange={handleAddFormValue} 
            />
            <TextField 
                label="Password" 
                name="password"
                type="password"
                variant="outlined" 
                fullWidth 
                required  
                onChange={handleAddFormValue} 
            />
            <FormControl variant='outlined'>
                <InputLabel id='inputRole'>Role:</InputLabel>
                <Select 
                    name='role' 
                    label='Role:'
                    onChange={handleAddFormValue}
                >
                    <MenuItem value='Admin'>Admin</MenuItem>
                    <MenuItem value='Manager'>Manager</MenuItem>
                    <MenuItem value='Crew'>Crew</MenuItem>
                    <MenuItem value='Staff'>Staff</MenuItem>
                </Select>
            </FormControl>
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
                Already have an account? <Link to="/">Login here</Link>
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