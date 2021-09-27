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
  posts: [],
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
    deletePost: (state, action) => {
      const { payload } = action;

      let posts = [...state.posts];
      const index = posts.findIndex((post) => post.id === payload);
      posts.splice(index, 1);

      state.posts = [
        ...posts
      ];
    },
    editPost: (state, action) => {
      const { payload } = action;

      let posts = [...state.posts];
      let index = posts.findIndex((post) => post.id === payload.id);

      posts[index] = payload;

      state.posts = [
        ...posts
      ];
    },
    setStatus: (state, action) => {
      const { payload } = action;
      state.status = payload
    }
  },
});

export const { setUser, setPosts } = appSlice.actions;

export const selectUser = (state: RootState) => state.app.user;
export const selectPosts = (state: RootState) => state.app.posts;
export const selectStatus = (state: RootState) => state.app.status;

export default appSlice.reducer;