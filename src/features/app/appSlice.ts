import { createSlice } from '@reduxjs/toolkit';

import { Post } from '../../model/Post';
import { RootState } from '../../redux/store';

export interface AppState {
  user: string
  posts: Post[]
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AppState = {
  user: '',
  posts: [
    // Adding a hardcoded post, because the API is giving me CORS error
    {
      "id": 716,
      "username": "Concluido",
      "created_datetime": "2021-08-17T22:21:41.170714Z",
      "title": "ADDIDTEST",
      "content": "rvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
    },
  ],
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload
    },
    setPosts: (state, action) => {
      const { payload } = action;
      state.posts = payload
    },
    addPost: (state, action) => {
      const { payload } = action;
      state.posts = [
        ...state.posts,
        payload
      ]
    },
    setStatus: (state, action) => {
      const { payload } = action;
      state.status = payload
    },
  },
});

export const { setUser, setPosts } = appSlice.actions;

export const selectUser = (state: RootState) => state.app.user;
export const selectPosts = (state: RootState) => state.app.posts;
export const selectStatus = (state: RootState) => state.app.status;

export default appSlice.reducer;