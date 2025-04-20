import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from './Dashboard'

const Santos = () => {
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Manager") return navigate("/staff")

        setRole(role)
    }, []);

    return <Dashboard />
}

export default Santos;