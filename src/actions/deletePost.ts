import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { DELETE_POST, SET_STATUS } from '../features/app/appActions';

export function deletePost(postId: number) {
  return async function (dispatch: AppDispatch) {
    // I'm deleting the post here, because the API is giving me CORS error
    dispatch({
      type: DELETE_POST,
      payload: postId
    });
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const response = await api.delete<void>(`/careers/${postId}`)
      if (response) {
        dispatch({ type: SET_STATUS, payload: 'idle' });
        dispatch({ type: DELETE_POST, payload: postId });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_STATUS, payload: 'error' });
    }
  }
}