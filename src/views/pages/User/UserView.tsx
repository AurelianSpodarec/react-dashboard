import { useEffect } from "react"; 
import { useFetchUser } from "services/dummyjson/api/user";

interface UserProps {
    id: number;
    firstName: string;
}



function UserView() {
    const user = useFetchUser(1)
    
    console.log(user.data)
    return (
        <div>

           view
        </div>
    )
}

export default UserView;