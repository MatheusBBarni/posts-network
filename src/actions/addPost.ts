import { CreatePost } from './../model/Post';
import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { ADD_POST, SET_STATUS } from '../features/app/appActions';
import { Request } from '../model/Request';
import { getUnixTime } from 'date-fns';

export function addPost(post: CreatePost) {
  return async function (dispatch: AppDispatch) {
    // I'm adding the post here, because the API is giving me CORS error
    dispatch({
      type: ADD_POST,
      payload: {
        ...post,
        id: getUnixTime(new Date()),
        created_datetime: new Date().toString()
      }
    });
    try {
      dispatch({ type: SET_STATUS, payload: 'loading' });
      const { data } = await api.post<Request<CreatePost>>('/careers')
      if (data) {
        dispatch({ type: SET_STATUS, payload: 'idle' });
        dispatch({ type: ADD_POST, payload: post });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_STATUS, payload: 'error' });
    }
  }
}