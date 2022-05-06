// 中间跳转器
import axios from "axios";
import {service} from "./config";
import cookie from "react-cookies";

export default function Jump() {
    axios.get(service + 'role/get?uid=' + cookie.load('token')).then(
        (res) => {
            if (res.data.code === 0) {
                window.location.href = '/game'
            } else {
                window.location.href = '/create'
            }
        }
    )
}