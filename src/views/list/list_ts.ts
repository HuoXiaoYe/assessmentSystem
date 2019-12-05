import { axiosGet } from "../../api/baseApi"
import { departmentListUrl, saveAllUrl } from "../../config/baseUrl"

// ?pwd=001VDVBF

export const getDepartmentList = async (pwd: string) => {
    let url = departmentListUrl + `?pwd=${pwd}`
    let departmentList = await axiosGet(url);
    return departmentList
}

export const saveAllAssessment = async (pwd: string) => {
    let url = saveAllUrl + `?pwd=${pwd}`
    let response = await axiosGet(url);
    return response
}