"use client"
import { useState, useEffect } from "react";

type User ={
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users")
                if (!response.ok) 
                    throw new Error("Failed to fetch users")
                    const data = await response.json()
                    setUsers(data)       
            } catch (error) {
                setError("Failed to fetch users")
                if (error instanceof Error) {    
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    },[])

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return (
        <ul className="flex flex-col items-center gap-4 p-4">
            {users.map((user) => (
                <li key={user.id} className="flex flex-col items-center">
                    {user.name} ({user.email})
                    </li>
            ))}
        </ul>
    )
}
