import { revalidatePath } from "next/cache"
/* import {auth, currentUser} from "@clerk/nextjs/server"
 */type MockUser ={
    id: number;
    name: string;
   
}

export default async function MockUsers() {
 /*    const authObj = await auth()
    const userObj = await currentUser() 

    console.log({authObj, userObj})
*/
    const response = await fetch("https://675318a6f3754fcea7bac104.mockapi.io/users")
    const users = await response.json()

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get("name")
        const response = await fetch("https://675318a6f3754fcea7bac104.mockapi.io/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        })
    const newUser = await response.json()
    revalidatePath("/mock-users")
    console.log(newUser)
    
    }
    return (
        <div className="py-10">
            <form action={addUser}>
                <input type="text" name="name" placeholder="Name" required className="p-2" />
                <button type="submit">Add user</button>
            </form>
        <ul className="flex flex-col items-center gap-4 p-4">
            {users.map((user: MockUser) => (
                <li key={user.id} className="flex flex-col items-center">
                    {user.name} 
                    </li>
            ))}
        </ul>
        </div>
    )
}