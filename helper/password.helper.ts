import CryptoJS from 'crypto-js';
import appConfig from '@/config';

const makePassword = (password: string): string => {
    return CryptoJS.AES.encrypt(password, appConfig.SECRET_KEY).toString();
}

const comparePassword = (password: string, hash: string): boolean => {
    const originalText = CryptoJS.AES.decrypt(hash, appConfig.SECRET_KEY).toString(CryptoJS.enc.Utf8)
    return password === originalText;
}

export default {
    makePassword,
    comparePassword,
}