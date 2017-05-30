import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER} from '../actions/types';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };


// const INITIAL_STATE = {email: '' , password: '' , user :null , error: '' , loading: false};
//
// export  default (state = INITIAL_STATE , action) => {
//     //console.log(action);
//     switch (action.type){
//         case EMAIL_CHANGED:
//             return {...state ,  email :action.payload};
//
//         case PASSWORD_CHANGED:
//             return {...state , password:action.payload};
//
//         case LOGIN_USER:
//             return{...state , loading:true , error:''};
//
//         case LOGIN_USER_SUCCESS:
//             return {...state , user:action.payload , error : '' ,loading:false};
//
//         case LOGIN_USER_FAIL:
//             return {...state , error : 'fail auth' , password :'',loading:false};
//
//         default:
//             return state;
//     }
// };
function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
