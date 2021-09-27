import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { EDIT_POST, SET_STATUS } from '../features/app/appActions';
import { Post } from '../model/Post';

export function editPost(post: Post) {
  return async function (dispatch: AppDispatch) {
    // I'm editing the post here, because the API is giving me CORS error
    dispatch({
      type: EDIT_POST,
      payload: post
    });
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const response = await api.patch<void>(`/careers/${post.id}`, {
        title: post.title,
        content: post.content
      })
      if (response) {
        dispatch({ type: SET_STATUS, payload: 'idle' });
        dispatch({ type: EDIT_POST, payload: post });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_STATUS, payload: 'error' });
    }
  }
}