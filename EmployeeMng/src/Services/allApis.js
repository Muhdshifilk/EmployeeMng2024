import axios from "axios"

const BaseUrl="http://localhost:3000"

export const addEmpApi=async(data)=>{
    return await axios.post(`${BaseUrl}/addemp`,data)
}

export const getEmpApi=async()=>{
    return await axios.get(`${BaseUrl}/employees`)
}


export const delEmpApi=async(id)=>{
    return await axios.delete(`${BaseUrl}/deleteemp/${id}`)
}

export const editApi=async(id,data)=>{
    return await axios.put(`${BaseUrl}/updateemp/${id}`,data)
}