import axios from "axios";
import { BASE_URL } from "./api";

const baseUrl = BASE_URL

const getAllItem = async () => {
    const result = await axios.get(baseUrl + 'donationItem/donationItem/list')
    return result.data
}

const getItemById = async (id) => {
    const result = await axios.get(baseUrl + 'donationItem/donationItem/queryByClassId',
        { params: { classId: id } })
    return result.data
}

const getAll = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

const getTodoList = async (todo) => {
    const result = await axios.get(`${baseUrl}/${todo}`)
    return result.data
}

const postTaskList = async (task) => {
    const result = axios.post(`${baseUrl}/Tasks`, task)
    return result
}

const postTodo = async (taskName, todo) => {
    const result = axios.post(`${baseUrl}/Tasks/${taskName}`, todo)
    return result
}

const deleteTodo = async (taskName, todoName) => {
    const result = axios.delete(`${baseUrl}/Tasks/${taskName}`, { data: { name: todoName } })
    return result
}

export default {
    getAllItem: getAllItem,
    getItemById: getItemById
}