import { Request, Response, NextFunction } from 'express';
import { MessageHelper } from '@/helper';
import { MessageParamsTypes } from "@/types/message.types";
import config from "@/config";

interface CustomRequest extends Request {
    __: (payload: MessageParamsTypes) => string;
    __key: any;
}

class LanguageMiddleware {
    public async setLanguage(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            const lang = req.headers['accept-language'] || config.DEFAULT_MESSAGE_LANG;
            req.__key = MessageHelper.langKay;
            req.__ = (payload: MessageParamsTypes) => {
                return MessageHelper.getMessage({
                    ...payload,
                    lang
                });
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}

export default new LanguageMiddleware();
 