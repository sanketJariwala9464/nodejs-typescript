import LanguageClass from "@/i18n";
import { MessageParamsTypes } from "@/types/message.types"; 
import config from "@/config";

class MessageHelper {

    private language: LanguageClass;

    public langKay: any = {};

    constructor() {
        this.language = new LanguageClass();
        this.langKay = this.language.langKay;
    }

    getMessage(payload: MessageParamsTypes): string {
        const { key, values, lang } = payload;  
        try {
            const messages = this.language.getLang(lang || config.DEFAULT_MESSAGE_LANG);
            const message = messages[key]; 
            if (key && values && values.length > 0) {
                let response: string = message[key];
                values.forEach((value, index) => {
                    response = response.replace(`{${index}}`, value);
                });
                return response;
            }
            return message;
        } catch (error) {
            return key;
        }
    }
}

export default new MessageHelper();