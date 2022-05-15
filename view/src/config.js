const flag = false;
let SERVICE = 'http://localhost:8000/';
let SERVICE_IMG = 'http://localhost:8000/static/img/';
if (flag) {
    SERVICE = 'http://43.156.43.203:8000/';
    SERVICE_IMG = 'http://43.156.43.203:8000/static/img/';
}
export {SERVICE, SERVICE_IMG}