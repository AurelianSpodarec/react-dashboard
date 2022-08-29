import { useEffect } from "react"; 

interface UserProps {
    id: number;
    firstName: string;
}


function UserView() {

    function fetchUsers() {
        const users = fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(console.log);
        
        console.log(users)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>

           view
        </div>
    )
}

export default UserView;