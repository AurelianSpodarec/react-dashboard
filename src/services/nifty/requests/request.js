import config from '../config';

import {
    getResponseContent,
    RequestError
} from './../../requests';
 

const SpotifyRequest = async function (endpoint, method, data) {
    
    const params = { locale: 'gb_GB', country: 'GB' };
    const token = await getToken();

    const response = await fetch(`${config.API_URL}/${endpoint}`, {
        method,
        "credentials": 'omit',
        "headers": {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        // "params": params,
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)

    if (response.ok) return content;
    throw new RequestError(response.statusText, response.status, content)
}

export default SpotifyRequest;