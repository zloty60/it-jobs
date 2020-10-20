import { notificationsActions } from "./../../data/actionTypesConstants";


const initialState = {
    login:{
        message:"",
        isOpen:false 
    }
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case notificationsActions.OPEN_NOTIFICATION:  
      return {
        ...state,
        login: {
        message:action.payload,
        isOpen:true
        }
      };
    case notificationsActions.CLOSE_NOTIFICATION: 
        return {
            ...state,
            login: {
                ...state.login,
                isOpen:false
            }   
        }
    default:
      return state;
  }
};

export default notificationsReducer;
