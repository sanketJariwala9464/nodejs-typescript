import { ResponseType, PaginationType } from "@/types/response.types";
import { Response, Request } from "express";

class ResponseHelper {
  public successResponse(response:Response, statusCode:number, message:string, data?:any, pagination?:PaginationType | null): Response {

    const res: ResponseType = {
      message,
      data,
    };

    if (pagination && Object.keys(pagination).length > 0) {
      res["pagination"] = pagination;
    }

    return response.status(statusCode).json(res);
  }

  public errorResponse(response:Response, statusCode:number, message:string, data?:any,): Response {

    const res: ResponseType = {
      message,
    };

    if (data) {
      res["data"] = data;
    }

    return response.status(statusCode).json(res);
  }

  public internalServerError(request:Request, response: Response): Response {
    return response.status(500).json({
      message: request.__({ key: 'general_fail' }),    
    });
  }
}

export default new ResponseHelper();