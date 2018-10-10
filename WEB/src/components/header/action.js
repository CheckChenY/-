
export const GET_LANGUAGE = 'GET_LANGUAGE';


export const handleChangeLanguage = (value) => dispath => {
    dispath({
        type:GET_LANGUAGE,
        Language:value
    })
}

