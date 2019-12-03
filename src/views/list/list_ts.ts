import { axiosGet } from "../../api/baseApi"
import { departmentListUrl } from "../../config/baseUrl"

// ?pwd=001VDVBF

export const getDepartmentList = async (pwd: string) => {
    let url = departmentListUrl + `?pwd=${pwd}`
    let departmentList = await axiosGet(url);
    return departmentList
}