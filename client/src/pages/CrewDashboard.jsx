import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'

const CrewDashboard = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Crew") return navigate("/")

        setRole(role)
    }, []);

    return <Dashboard />
}

export default CrewDashboard;