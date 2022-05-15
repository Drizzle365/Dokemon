const flag = true;
let SERVICE = 'http://localhost:8000/';
let SERVICE_IMG = 'http://localhost:8000/static/img/';
if (flag) {
    SERVICE = 'https://py.dokemon.cn/';
    SERVICE_IMG = 'https://py.dokemon.cn/static/img/';
}
export {SERVICE, SERVICE_IMG}