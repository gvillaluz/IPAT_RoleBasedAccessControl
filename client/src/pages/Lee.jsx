import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'

const Lee = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Crew") return navigate("/admin")

        setRole(role)
    }, []);

    return <Dashboard />
}

export default Lee;