export const convertToFormData = (data: object) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
        if (value !== null) formData.append(key, value);
    }
    return formData;
};