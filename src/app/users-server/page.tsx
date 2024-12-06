
type User ={
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UserServer() {
/*     await new Promise((resolve) => setTimeout(resolve, 3000))
 */    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return (
        <ul className="flex flex-col items-center gap-4 p-4">
            {users.map((user: User) => (
                <li key={user.id} className="flex flex-col items-center">
                    {user.name} ({user.email})
                    </li>
            ))}
        </ul>
    )
}