import useSWR from 'swr';
import createAuthApiClient from './ApiClient';
import { message } from 'antd';
import { AxiosRequestConfig } from 'axios';
import { convertToFormData } from '@/shared/convert.to.form.data';
import { sanitize } from '@/shared/sanitizer';
import { handleCatch } from '@/shared/handleCatch';

export interface ErrorObjInterface {
    statusCode?: number;
    message: string | string[];
    Description?: string;
    error?: string;
}

export function useCRUD<T, K = Partial<T>>(
    url: string,
    id?: any,
    queryString: string | null = null,
    shouldFetch = true
) {
    const ApiAuthClient = createAuthApiClient(
        process.env.NEXT_PUBLIC_API_ROOT!
    );
    const fetcher = (url: string) =>
        ApiAuthClient.get(url).then((res) => res.data as T);

    const URL = `${url}${id ? `/${id}` : ''}`;
    const { data, error, mutate } = useSWR(
        shouldFetch ? `${URL}${queryString ? `?${queryString}` : ''}` : null,
        fetcher
    );

    const update = async (data: K, subResource = '', config: any = null) => {
        try {
            let body = sanitize(data);
            if (config?.headers?.['Content-Type'] == 'multipart/form-data') {
                body = convertToFormData(body);
            }
            const result: T = await ApiAuthClient.put(
                URL + '/' + subResource,
                body,
                config
            );

            await mutate();
            return result;
        } catch (error: any) {
            if (error?.response?.data) {
                handleCatch(error?.response?.data);
                throw error;
            } else {
                message.open({
                    type: 'error',
                    content: 'დაფიქსირდა გაურკვეველი შეცდომა',
                });
            }
        }
    };

    const create = async (
        data: any,
        subResource = '',
        config?: AxiosRequestConfig
    ) => {
        try {
            const result = await ApiAuthClient.post(
                `${URL || url}${subResource ? `/${subResource}` : ''}`,
                sanitize(data),
                config
            );
            return result.data;
        } catch (err: any) {
            handleCatch(err?.response?.data);
            throw error;
        }
    };

    const remove = async (subResource: string | null) => {
        try {
            return await ApiAuthClient.delete(
                `${URL}${subResource ? `/${subResource}` : ''}`
            );
        } catch (err: any) {
            handleCatch(err?.response?.data);
            throw error;
        }
    };

    const batchRemove = async (body: any, subResource?: string) => {
        const data = sanitize(body);
        try {
            return await ApiAuthClient.delete(
                `${URL}${subResource ? `/${subResource}` : ''}`,
                {
                    data,
                }
            );
        } catch (err: any) {
            handleCatch(err?.response?.data);
            throw error;
        }
    };

    return {
        mutate,
        data,
        error,
        isLoading: !data && !error,
        update,
        create,
        remove,
        batchRemove,
    };
}
