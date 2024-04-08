import axios from "axios";
import { BACKEND_URL } from '../utils/index';

const api = axios.create({
    baseURL: `${BACKEND_URL}/api`,
});

api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.access_token) {
            config.headers['Authorization'] = `Bearer ${user.access_token}`;
            config.headers['User-Id'] = `${user.id}`;
            config.headers['User-Email'] = `${user.email}`;
        }
        const activeOrg = JSON.parse(localStorage.getItem('activeOrg'));
        if (activeOrg) {
            config.headers['Active-Org-Id'] = `${activeOrg._id}`;
        }
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;