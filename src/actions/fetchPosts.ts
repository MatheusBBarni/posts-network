import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { SET_POSTS, SET_STATUS } from '../features/app/appActions';
import { Post } from '../model/Post';
import { Request } from '../model/Request';

export async function fetchPosts(dispatch: AppDispatch) {
  try {
    dispatch({ type: SET_STATUS, payload: 'loading' });
    const { data } = await api.get<Request<Post[]>>('/careers/')
    if (data) {
      dispatch({ type: SET_POSTS, payload: data.results });
      dispatch({ type: SET_STATUS, payload: 'idle' });
    }
  } catch (error) {
    dispatch({ type: SET_STATUS, payload: 'error' });
  }
}