import {notification} from "antd";

const openNotification = (message, description) => {
    notification.open({
        message: message, description: description, duration: 2
    });
};
export default openNotification