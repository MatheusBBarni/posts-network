import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { SET_STATUS } from '../features/app/appActions';
import { fetchPosts } from './fetchPosts';

export function deletePost(postId: number) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const response = await api.delete<void>(`/careers/${postId}/`)
      if (response) {
        dispatch({ type: SET_STATUS, payload: 'idle' });
        dispatch(fetchPosts);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_STATUS, payload: 'error' });
    }
  }
}