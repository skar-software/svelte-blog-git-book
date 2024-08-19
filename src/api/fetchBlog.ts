import axios, { type AxiosResponse } from "axios";

export const fetchBlog = (path: string): Promise<AxiosResponse<any, any>> => {
    return new Promise((resolve, reject) => {
        console.log(path)
        axios.get(`/blogs/content/${path}`)
        .then(response => {
            resolve(response)
        })
        .catch(reject)
    });
}