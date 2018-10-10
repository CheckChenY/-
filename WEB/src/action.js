
import intl from 'react-intl-universal';
const locales = {
	"zh-TW": require('./locales/zh-TW.json'),
	"zh-CN": require('./locales/zh-CN.json'),
};

export const GET_LANGUAGE_INIT = 'GET_LANGUAGE_INIT';

export const loadLocales = (Language) => dispath => {
    intl.init({
        currentLocale: Language, // TODO: determine locale here
        locales,
    })
    dispath({
        type:GET_LANGUAGE_INIT,
        loading:false
    })
}