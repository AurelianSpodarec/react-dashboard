import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "interface/User";
import { useFetchUsers } from "services/dummyjson/api/user";
import { Container, Heading, Pagination } from "views/molecules";
import { Table, TableHead, TableBody, TableRow, TableCell } from "views/molecules/Table";


interface RenderUserProps {
    item: IUser,
}

function ErrorFallback({errorMessage}:any) {
    return (
    <div role="alert">
        <p>Something went wrong:</p>
        <pre>{errorMessage}</pre>
    </div>
    )
}


function TableUserRow({item}:RenderUserProps) {
    // Can add a skeleton to loading state
    return (
        <TableRow>
        {/* <Link to={`/user/${item.id}`} className="block w-full"> */}
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-200 sm:pl-6"><input type="checkbox" /></td>
            <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{item.id}</td>
            <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{item.firstName}</td>
            <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{item.lastName}</td>
            <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{item.company.department}</td>
            <td className="whitespace-nowrap py-4 pl-3 text-md pr-4 text-right font-medium relative sm:pr-6">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
            </td>
        {/* </Link> */}
        </TableRow>
    )
}


function TableUserBody({data}:any) {
    if(data.isLoading) return <>Loading</>
    if(data.error) return <ErrorFallback />
    return (
        <TableBody>
            { data.data.users.map((item:IUser, index:number) => {
                return <TableUserRow key={index} item={item} />
            })}
        </TableBody>
    )
}

function UserIndex() {
    const users = useFetchUsers({limit: 20})
    console.log(users)
    return (
        <div>
            <Heading title="Users" />

            <Container>
            <div className="rounded-md border-2 border-gray-700 bg-gray-800 p-8">

                <div className="flex justify-between">
                    <div>
                        
                    </div>
                    
                    <div className="flex">
                        <input placeholder="Search" />
                        <button title="Filter" type="button">
                            <span className="sr-only">Filter</span>
                            <svg className="text-orange-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                            </svg>
                        </button>

                        <button title="Toggle Columns" type="button">
                            <span className="sr-only">Toggle Columns</span>
                            <svg className="text-orange-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                            </svg>
                        </button>
                    </div>
                </div>


                <Table>
                    <TableHead>
                        <TableRow>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-200 sm:pl-6"></th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-200 sm:pl-6">ID</th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-200">Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-200">Last Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-200">Departament</th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </TableRow>
                    </TableHead>
                
                    <TableBody>
                        <TableUserBody data={users}/>
                    </TableBody>
                </Table>

                <Pagination data={users}/>

            </div>
            </Container>    
        </div>
    )
}

export default UserIndex;