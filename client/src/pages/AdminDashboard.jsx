import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'

const AdminDashboard = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Admin") return navigate("/manager-dashboard")

        setRole(role)
    }, []);

    return <Dashboard />
}

export default AdminDashboard;