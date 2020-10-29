import axios from 'axios';

const instance = axios.create ( {
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
} )
export default instance;
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc
