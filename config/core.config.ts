import 'dotenv/config';

export default {
    SECRET_KEY: process.env.SECRET_KEY || 'secret',
    DEFAULT_MESSAGE_LANG: process.env.DEFAULT_MESSAGE_LANG || 'en',
}