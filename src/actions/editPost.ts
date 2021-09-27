import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { SET_STATUS } from '../features/app/appActions';
import { Post } from '../model/Post';
import { fetchPosts } from './fetchPosts';

export function editPost(post: Post) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const response = await api.patch<void>(`/careers/${post.id}/`, {
        title: post.title,
        content: post.content
      })
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