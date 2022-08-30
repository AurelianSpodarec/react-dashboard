import useSWR from 'swr';

import getResponseContent from 'services/requests/getResponseContent';
import RequestError from 'services/requests/RequestError';

import config from '../config';

async function fetcher(endpoint:any, method:string, reqData?:object) {
    const response = await fetch(`${config.API_URL}${endpoint}`, {
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
  
export function useDummyJsonFetch (endpoint:string, method:string, reqData?:object) {
    const { data, error } = useSWR(endpoint, endpoint => fetcher(endpoint, method, reqData))

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}