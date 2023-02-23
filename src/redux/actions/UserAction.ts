import {Dispatch} from 'redux';

export const GET_USER = 'GET_USER';

export const getUser = () => (dispatch: Dispatch) => {
  dispatch({
    type: GET_USER,
    payload: {
      name: 'Firman Maulana',
      email: 'firman@gmail.com',
    },
  });
};
