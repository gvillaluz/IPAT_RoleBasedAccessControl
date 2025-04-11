import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from './Dashboard'

const StaffDashboard = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const storedRole = localStorage.getItem("role")
        if (storedRole !== "Staff") return navigate("/crew-dashboard")

        setRole(storedRole)
    }, []);

    return <Dashboard />
}

export default StaffDashboard;