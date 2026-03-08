import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || "Something went wrong";

        return Promise.reject(new Error(message))
    }
);