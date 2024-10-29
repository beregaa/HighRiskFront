import axios, {HttpStatusCode, InternalAxiosRequestConfig} from 'axios';
import TokenService from './TokenService';

const createAuthApiClient = (url: string) => {
    const ApiAuthClient = axios.create({
        baseURL: url,
    });

    const isRefreshTokenExpired = (err: any, originalConfig: any) => {
        if (originalConfig.url === '/users/refresh') {
            return true;
        }
    };

    const handleRefreshTokenExpiration = () => {
        TokenService.removeUser();
        window.location.href = '/login';
    };

    const isUnauthorized = (err: any) => {
        return err.response.status === HttpStatusCode.Unauthorized;
    };

    const resetRefreshToken = async () => {
        const refreshToken = TokenService.getLocalRefreshToken();
        if (refreshToken?.length > 0) {
            const rs = await ApiAuthClient.post('/users/refresh', {
                refreshToken: refreshToken,
            });
            const {accessToken} = rs?.data;
            TokenService.updateLocalAccessToken(accessToken);
        }
    };

    const addTokenToRequestHeaders = (
        config: InternalAxiosRequestConfig<any>
    ) => {
        const token = TokenService.getLocalAccessToken();

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        return config;
    };

    ApiAuthClient.interceptors.request.use(
        (config) => {
            return addTokenToRequestHeaders(config);
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    ApiAuthClient.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;
            if (!isUnauthorized(err) || originalConfig._retry) {
                return Promise.reject(err)
            }

            if (isRefreshTokenExpired(err, originalConfig)) {
                handleRefreshTokenExpiration();
            }

            originalConfig._retry = true;
            try {
                await resetRefreshToken();
                return ApiAuthClient(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    );

    return ApiAuthClient;
};

export default createAuthApiClient;
