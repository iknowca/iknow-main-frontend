import axios from 'axios';
import router from '@/router';
import { useAccountStore } from '@/stores/account';

const authServerAxios = axios.create({
    baseURL: process.env.VUE_APP_AUTH_SERVER_BASE_URL,
});

authServerAxios.interceptors.response.use((res) => { return res },
    async (error) => {
        if (authServerAxios.refresh === true) {
            return await handleRequest(error);
        }
        if (error.response.status === 401 && error.response?.data.message === "Token is not found" && error.config.url !== '/jwt/refresh') {
            authServerAxios.refresh = true;
            return await authServerAxios.get('/jwt/refresh', { withCredentials: true })
                .then((res) => {
                    authServerAxios.defaults.headers.common['Authorization'] = `${res.data.accessToken}`;
                    authServerAxios.refresh = false;
                    return authServerAxios(error.config)
                })
                .catch(() => {
                    alert('로그인이 만료되었습니다.\n다시 로그인해주세요.');
                    useAccountStore().setLoginStatus(false);
                    router.push('/account/login')
                });
        } else {
            return Promise.reject(error);
        }
    }
)

function waitForRefresh() {
    return new Promise(resolve => {
        const checkInterval = setInterval(() => {
            if (authServerAxios.refresh === false) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
    });
}
async function handleRequest(error) {
    await waitForRefresh();
    return authServerAxios(error.config);
}
export default authServerAxios;