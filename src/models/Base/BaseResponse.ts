export type BaseResponse<T = any> = {
    code: number;
    message: string;
    data: T;
};

export type BaseReduxRTKResponse<T = any> = {
    data: T;
    status: number;
};
