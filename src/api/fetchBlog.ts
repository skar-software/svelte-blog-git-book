import axios, { type AxiosResponse } from "axios";

export const fetchBlog = (path: string): Promise<AxiosResponse<any, any>> => {
    return new Promise((resolve, reject) => {
        axios.get(`/content/${path}`)
        .then(response => {
            resolve(response)
        })
        .catch(reject)
    });
}