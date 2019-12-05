import { AxiosResponse } from 'axios';
import axios from 'axios';

// get
// export async function axiosGet(api:string,params:any=null):Promise<AxiosResponse<IDepartment[]>>{
export async function axiosGet(api:string,params:any=null){
    let  response = await axios.get(api,{params});
    return response.data;
}
// post
export async function axiosPost(api:string,data:any){
    let  response = await axios.post(api,data);
    return response.data;
}
// put
export async function axiosPut(api:string,data:any):Promise<AxiosResponse<any>>{
    let  response = await axios.put(api,data);
    return response.data;
}
// patch
export async function axiosPatch(api:string,data:any):Promise<AxiosResponse<any>>{
    let  response = await axios.patch(api,data);
    return response.data;
}

// delete
export async function axiosDelete(api:string,data:any):Promise<AxiosResponse<any>>{
    let  response = await axios.delete(api,data);
    return response.data;
}