import { notificationsActions } from "./../../data/actionTypesConstants";

export const showNotification = (message) => {
    return {
        type:notificationsActions.OPEN_NOTIFICATION,
        payload:message
    }
}

export const deleteSuccessNotfication = () => {
    return {
        type:notificationsActions.CLOSE_NOTIFICATION
    }
}