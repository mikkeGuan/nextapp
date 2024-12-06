"use client"

import { useEffect } from "react"

export default function Error({error}: {error:Error}) { 
    useEffect(() => {alert("Failed to fetch users :(")}, [error])
    
    return(
        <p className="text-red-500">Error fetching users data</p>
    )
 }