import data from './globalData';

export const toggleStatusKeyVal = (dataType = '', queryVal = '', queryType = 'key', returnType = 'val') => {
    if (!dataType || !queryVal) return false;
    const arr = data[dataType];
    const current = arr.filter(item => item[queryType] === queryVal);
    if (current.length === 0) return false;
    return current[0][returnType];
}

export const queryJsonToString = (obj) => {
    let res = '';
    Object.keys(obj).forEach(item => {
        res += '&' + item + '=' + obj[item];
    })
    return res.substr(1);
}

export function formatData(date) {
    return date.format('YYYY-MM-DD')
}

export  function fromReset(form,initialValues){
    form.setFieldsValue({...initialValues})
}