const axios = require('axios').default;

const instance = axios.create({
    baseURL: "http://lanunion.cqu.edu.cn/",
    timeout: 30000,
    withCredentials: true
})

// don't know why this will work, but it works!
const readCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        // eslint-disable-next-line
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

instance.interceptors.request.use(
    (config) => {
        const csrfToken = readCookie('csrftoken');
        if (csrfToken) {
            config.headers['X-CSRFToken'] = csrfToken;
        }
        console.log(config)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance