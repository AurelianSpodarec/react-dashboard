import { useEffect } from "react";
import { Container, Heading } from "views/molecules";

interface UserProps {
    id: number;
    firstName: string;
}





function UserIndex() {

    // Decouple this
    function fetchUsers() {
        const users = fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(console.log);
        
        console.log(users)
    }

    useEffect(() => {
        fetchUsers()
    }, [])



    function renderUser(props:UserProps) {
        const { id, firstName } = props;

        return (
            <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-200 sm:pl-6">{firstName}</td>
                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">Front-end Developer</td>
                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">lindsay.walton@example.com</td>
                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">Member</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium sm:pr-6">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
                </td>
            </tr>
        )
    }

    return (
        <div>

            <Heading title="Users" />

            <Container>
                <div className="bg-gray-800">

                <div>
                    Results

                    Search
                    Filter
                </div>

                <table className="min-w-full divide-y divide-gray-300">
                <thead className="">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-200 sm:pl-6">Name</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-200">Title</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-200">Email</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-200">Role</th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    
                    
                    
                </tbody>
                </table>

                <div>
                    Pagination
                </div>

                </div>
            </Container>    
        </div>
    )
}

export default UserIndex;