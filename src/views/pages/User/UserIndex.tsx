import { useEffect, useState } from "react";
import { Container, Heading } from "views/molecules";
import useSWR from 'swr';
import getResponseContent from "services/requests/getResponseContent";
import RequestError from "services/requests/RequestError";

interface UserProps {
    id: number;
    firstName: string;
}

// const SpotifyRequest = async function (endpoint, method, data) {
    
     

//     const response = await fetch(`${config.API_URL}/${config.API_VERSION}/${endpoint}`, {
//         method,
//         "credentials": 'omit',
//         "headers": {
//             'Authorization': `${token}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         // "params": params,
//         body: JSON.stringify(data)
//     })

//     const content = await getResponseContent(response)

//     if (response.ok) return content;
//     throw new RequestError(response.statusText, response.status, content)
// }

// export default SpotifyRequest;

var configURL = "https://dummyjson.com"

// async function dummyRequest(endpoint:any, method:any, reqData?:any) {
//     const response = await fetch(`${configURL}/${endpoint}`, {
//         method,
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(reqData)
//     })

//     const content = await getResponseContent(response)
//     console.log("Hii")
//     const a = useSWR(`${configURL}/${endpoint}`, content)
//     console.log("useSWR", a)
//     // never reaches below this code
    
//     // if(response.ok) {
//     //     return {
//     //         data: res.data,
//     //         isLoading: !res.error && !res.data,
//     //         isError: res.error
//     //     }
//     // }
    
//     // throw new RequestError(response.statusText, response.status, content);
// }
 

//  async function useFetchUsers() {
 
//         console.log("feth top")
//         const  a = await DummyRequest('users', 'GET')
//         console.log("fetchusers", a)
//     //     console.log("fetch fet", a)
//     //     // setData(a)
//     //     // return a
//     // }
//     // useEffect(() => {
//     //     fet()
//     // }, [])

//     // return data;
// }
 
async function fetcher(endpoint:any, method:string, reqData?:object) {
    const response = await fetch(`${configURL}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(reqData)
    })
    const content = await getResponseContent(response)

    if (response.ok) return content;
    throw new RequestError(response.statusText, response.status, content)
}
  
function useFetch (endpoint:string, method:string, reqData?:object) {
    const { data, error } = useSWR(endpoint, endpoint => fetcher(endpoint, method, reqData))

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
} 


function useFetchUsers() {
    return useFetch('users', 'GET')
} 



function UserIndex() {
    const users = useFetchUsers()
    console.log("UserIndexPage", users)
   
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