import { useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { useFetchUser } from "services/dummyjson/api/user";

interface UserProps {
    id: number;
    firstName: string;
}

function UserView() {
    const { id }:any = useParams();
    const user = useFetchUser(id)
    
    if(user.isLoading) return <>spinner</>
    // error
    // below success

    console.log(user.data)
    const { image, firstName, birthDate } = user.data;
    return (
        <div>
            
            <img src={image} alt={firstName} />
            <time>{birthDate}</time>
        </div>
    )
}

export default UserView;