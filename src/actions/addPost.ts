import { CreatePost } from './../model/Post';
import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { SET_STATUS } from '../features/app/appActions';
import { Request } from '../model/Request';
import { fetchPosts } from './fetchPosts';

export function addPost(post: CreatePost) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const { data } = await api.post<Request<CreatePost>>('/careers/', post)
      if (data) {
        console.log('data', data);

        dispatch({ type: SET_STATUS, payload: 'idle' });
        dispatch(fetchPosts);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_STATUS, payload: 'error' });
    }
  }
}