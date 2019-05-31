import {
  LOGIN_START,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  FETCH_USER_START,
  FETCH_USER_SUCCESSFUL,
  ADD_USER_START,
  ADD_USER_SUCCESS, 
  DELETE_USER_SUCCESS,
  UPDATE_USER_START,
  DELETE_USER_START,
  UPDATE_USER_SUCCESS,
  DELETE_USER_FAILED,
  UPDATE_USER_FAILED,

} from "../Actions";

const initialState = {
  user: [],
  fetchingUser: false,
  isLoggingIn: false,
  isLoggedIn: false,
  addingUser: false,
  deletingUser: false,
  updatingUser: false
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log("Help! I'm in the reducer!", action, state);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggingIn: false,
        error: ""
      };

    case FETCH_USER_START:
      return {
        ...state,
        fetchingUser: true,
        error: false,
        isLoggedIn: true
      };

    case FETCH_USER_SUCCESSFUL:
      return {
        ...state,
        fetchingUser: false,
        error: "",
        user: action.payload,
        isLooggedIn: true
      };

    case ADD_USER_START:
      return {
        ...state,
        addingUser: true,
        error: ""
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        addingUser: false,
        user: action.payload
      };
    

    case DELETE_USER_START:
        return {
          ...state,
          deletingUser: true,
          user: ''
        };
     

    case DELETE_USER_SUCCESS:
            return {
              ...state,
              deletingUser: false,
              user: ''
              users: state.users.filter( user => {
                return user.id !== action.payload
              } )
            }
         

     case DELETE_USER_FAILED:
                return {
                  ...state,
                  deletingUser: false,
                  user: ''
                }
            

     case UPDATE_USER_START:
           return {
            ...state,
            updatingUser: false,
             user: action.payload
           }
      
            
       case UPDATE_USER_SUCCESS:
           return {
              ...state,
          updatingUser: false,
           user: action.payload
             }
            
       case UPDATE_USER_FAILED:
              return {
                ...state,
               addingUser: false,
              user: action.payload
                 };
                default:
                return state;
  }
};

export default reducer;
