import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'

const Salaysay = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Admin") return navigate("/manager")

        setRole(role)
    }, []);

    return <Dashboard />
}

export default Salaysay;