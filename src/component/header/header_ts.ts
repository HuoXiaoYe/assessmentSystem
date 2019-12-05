import { axiosGet } from "../../api/baseApi"
import { candidateCountUrl } from "../../config/baseUrl"


export const getCandidateCount = async () => {
    let url = candidateCountUrl
    let count = await axiosGet(url)
    return count
}