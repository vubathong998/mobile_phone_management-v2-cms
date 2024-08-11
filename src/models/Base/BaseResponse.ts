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

export type baseInfoModel = {
    _id: string;
    createdByName: string;
    createdByDate: Date;
    createdDateUnixTime: number;
    lastEditedDate: Date;
    lastEditedByName: string;
    lastCreatedDateUnixTime: number;
    __v: number;
};
