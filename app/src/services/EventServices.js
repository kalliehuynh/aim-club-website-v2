import axios from 'axios'
const baseUrl = 'http://localhost:8000/'

const getAll = () => {
    return axios.get(baseUrl)
}

export default {
    getAll: getAll
}