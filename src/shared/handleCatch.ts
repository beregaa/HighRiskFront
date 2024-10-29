import { ErrorObjInterface } from '@/api/useCRUD';
import { message } from 'antd';

export const handleCatch = (errorObj: ErrorObjInterface) => {
    message.open({
        type: 'error',
        content: Array?.isArray(errorObj.message)
            ? errorObj.message[0]
            : errorObj.message,
    });
};
