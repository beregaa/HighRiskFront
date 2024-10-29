import useSWR from 'swr';
import queryString from 'query-string';
import createAuthApiClient from './ApiClient';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { handleCatch } from '@/shared/handleCatch';
import { sanitize } from '@/shared/sanitizer';

export function createCrudFunctions<T, K = Partial<T>>(
    restRoute: string,
    searchParams: object = {},
    customClient?: AxiosInstance
) {
    const ApiAuthClient = createAuthApiClient(
        process.env.NEXT_PUBLIC_API_ROOT!
    );
    const client = customClient || ApiAuthClient;

    const queryStringified = queryString.stringify(
        !!searchParams ? searchParams : {}
    );

    const convertToFormData = (data: {
        [key: string]: string | Blob;
    }): FormData => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            if (value !== null) formData.append(key, value);
        }
        return formData;
    };

    const createApi = async <T>(data: any, config?: AxiosRequestConfig) => {
        try {
            let body = sanitize(data);

            if (config?.headers?.['Content-Type'] === 'multipart/form-data') {
                body = convertToFormData(body);
            }

            const result = await client.post(restRoute, body);

            return result.data as T;
        } catch (err: any) {
            handleCatch(err);
        }
    };

    const updateApi = async (
        id: number,
        data: K,
        config?: AxiosRequestConfig
    ) => {
        try {
            let body = sanitize(data);

            if (config?.headers?.['Content-Type'] === 'multipart/form-data') {
                body = convertToFormData(body);
            }

            const result = await client.put(
                `${restRoute}/${id}${
                    queryStringified.length ? `?${queryStringified}` : ''
                }`,
                body
            );

            return result.data;
        } catch (err: any) {
            handleCatch(err);
        }
    };

    const deleteApi = async (id: number) => {
        try {
            const result = await client.delete(
                `${restRoute}/${id}${
                    queryStringified.length ? `?${queryStringified}` : ''
                }`
            );
            return result.data;
        } catch (err: any) {
            handleCatch(err);
        }
    };

    const useData = <L>(id?: string, params?: any) => {
        const fetcher = (url: string, queryParams: object) => {
            return client
                .get(url, {
                    params: queryParams,
                })
                .then((res) => res.data as L);
        };

        const route = id ? restRoute + '/' + id : restRoute;

        const { data, error, mutate } = useSWR(
            [route, params],
            ([restRoute, params]) => fetcher(restRoute, params)
        );

        return {
            data: data,
            error,
            loading: !data && !error,
            mutate,
        };
    };

    return { createApi, updateApi, deleteApi, useData };
}
