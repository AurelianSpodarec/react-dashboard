// @API Docs: hhttps://dummyjson.com/docs/users
// ===================================================================
import { useDummyJsonFetch } from "../requests/request"


export function useFetchUsers() {
    return useDummyJsonFetch('users', 'GET')
}

export function useFetchUser(id:number) {
    return useDummyJsonFetch(`users/${id}`, 'GET')
}

export function useFetchSearchUsers() {
    // return useDummyJsonFetch(`users${id}`, 'GET')
}

export function useFetchUsersCarts() {
    
}

export function useFetchUsersPosts() {
    
}

export function useFetchUsersTodo() {
    
}

export function useFetchAddUser() {

}

export function useFetchUpdateUser() {
    
}

export function useFetchDeleteUser() {
    
}