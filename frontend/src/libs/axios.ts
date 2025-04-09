import axios, { AxiosInstance } from 'axios'

const BASE_URL: string = 'http://localhost:9000/api/v1';

const END_POINTS = {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    // GET_USER: '/user',
    // GET_USERS: '/users',
    // GET_USER_BY_ID: (id) => `/user/${id}`,
    // UPDATE_USER: (id) => `/user/${id}`,
    // DELETE_USER: (id) => `/user/${id}`,
    // UPLOAD_FILE: '/upload',
    // GET_FILES: '/files',
    // DELETE_FILE: (id) => `/file/${id}`,
};

const axiosInstance: AxiosInstance  = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});




export { axiosInstance, BASE_URL, END_POINTS };