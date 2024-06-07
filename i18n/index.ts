import fs from 'fs';

class LanguageClass {
    public lang: any = {};

    public langKay: any = {};

    constructor() {
        this.loadLang();
        this.loadLangKey(); 
    }

    public loadLang() {
        const files = fs.readdirSync(__dirname + '/locales');
        files.forEach(file => {
            const lang = require(__dirname + '/locales/' + file);
            this.lang[file.split('.')[0]] = lang;
        });
    }

    public loadLangKey() {
        const keys = Object.keys(this.lang);
        if (keys.length > 0) {
            const firstLang = this.lang[keys[0]];
            Object.keys(firstLang).forEach((key) => {
                this.langKay[key] = key;
            });
        }
    }

    public getLang(lang: string) {
        return lang in this.lang ? this.lang[lang] : this.lang['en'];
    }
}

export default LanguageClass;