import axios from 'axios'
export const addUser = userObj => {
    return (dispatch) => {
        axios.post("https://react-app-22fd8.firebaseio.com", {userObj})
        .then(response => {
            console.log(response);
            dispatch({
                type: 'ADD_USER',
                payload: response.data
            })
            .catch(error => {
                console.log(error);
            })
        })
    }
}