import { IResponseModel } from "./response-model";

export interface IListResponseModel<T> extends IResponseModel{
    data: T [];
}
