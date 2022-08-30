// When working with data, URL bar should be used as the state

import { useFetchUsers } from "services/dummyjson/api/user"

function ResultsInfo({data}:any) {
    console.log(data)
    return (
        <span className="text-white">Showing {data.data.skip} to {data.data.limit + parseInt(data.data.skip)} of {data.data.total} results</span>
    )
}

function PerPage({data}:any) {
        let params = {
            limit: "3"// e.target.value
        }
    const users = useFetchUsers(params)
    
    function handlerOnChange(e:any) {
        console.log(e.target.value)
    }

    return (
        <div>
            <label className="sr-only">Select items per page</label>
            <select onChange={e => handlerOnChange(e)} name="Items per page" className="text-gray-700" id="items-per-page">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <span>per page</span>
        </div>
    )
}

function Pagination({data}:any) {
    if(data.isLoading) return <>loading</>
    return (
        <div className="flex justify-between text-white">
            <ResultsInfo data={data} />
            <PerPage data={data}/>
            <span>Pagination numbers</span>
        </div>
    )
}

export default Pagination;