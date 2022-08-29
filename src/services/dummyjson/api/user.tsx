// @API Docs: https://app.swaggerhub.com/apis/Silverchip/nifty-admin_api/Staging#/AdminUsers

import { useDummyJsonFetch } from "../requests/request"

export function useFetchUsers() {
    return useDummyJsonFetch('users', 'GET')
} 