export type BaseResponse<T = any> = {
    code: number;
    message: string;
    data: T;
};
