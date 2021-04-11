import { IResponseModel } from "./response-model";

export interface ISingleResponseModel<T> extends IResponseModel{
    data: T ;
}