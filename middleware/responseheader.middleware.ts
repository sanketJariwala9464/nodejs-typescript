import { Request, Response, NextFunction } from "express";

class ResponseHeaderMiddleware {
  async index(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  }
}

export default new ResponseHeaderMiddleware();