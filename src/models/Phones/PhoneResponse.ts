import { baseInfoModel, BaseResponse } from '../Base/BaseResponse';
import { PhonesModel } from './PhonesModel';

export type PhonesResponse = {
    categoryName: string;
};

export type PhonesGetByPageResponse = Array<PhonesModel & PhonesResponse & baseInfoModel>;

export type PhonesCreateResponse = PhonesModel;
