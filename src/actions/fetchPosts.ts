import { AppDispatch } from '../redux/store';

import { api } from "../api"
import { setPosts } from "../features/app/appSlice"

export async function fetchPosts(dispatch: AppDispatch) {
  const { data } = await api.get('/careers')
  dispatch({ type: setPosts, payload: data.results })
}