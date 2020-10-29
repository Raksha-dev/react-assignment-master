import {LOGIN} from './auth';
import { apiRequest } from "./api"; 
const SERVER_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc`;
export const appMiddleware = () => next => action => {
    next(action);
    switch (action.type) {
      case LOGIN: {
        next(
          apiRequest({
            url: `${SERVER_URL}/login`,
            method: "POST",
            data: action.payload
          })
        );
        break;
      }
      default:
        break;
    }
  };