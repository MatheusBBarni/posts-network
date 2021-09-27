import { AppDispatch } from '../redux/store';
import { api } from '../api'
import { SET_POSTS } from '../features/app/appActions';
import { Post } from '../model/Post';
import { Request } from '../model/Request';

export async function fetchPosts(dispatch: AppDispatch) {
  const { data } = await api.get<Request<Post[]>>('/careers')
  dispatch({ type: SET_POSTS, payload: data.results })
}