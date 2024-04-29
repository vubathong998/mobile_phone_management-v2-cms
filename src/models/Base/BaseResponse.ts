export type BaseResponse<T = any> = {
    code: number;
    message: string;
    data: T;
};

export type BaseReduxRTKResponse<T = any> = {
    data: T;
    status: number;
};

export type BaseGetByPageResponse<T> = {
    limit: number;
    page: string;
    result: T;
    total: number;
};
