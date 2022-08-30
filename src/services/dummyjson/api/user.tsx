// @API Docs: hhttps://dummyjson.com/docs/users
// ===================================================================
// import { URLSearchParams } from "url"
import { useDummyJsonFetch } from "../requests/request"


export function useFetchUsers(param?:any) {

    // TODO: Refactor this into reusable stuff?
    let params = {
        limit: param.limit || 10,
        skip: "30",
        // select: ["firstName", "age"]
    }

    const qs = new URLSearchParams(params)
    return useDummyJsonFetch(`users?${qs}`, 'GET')
    // return useDummyJsonFetch(`users`, 'GET')
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