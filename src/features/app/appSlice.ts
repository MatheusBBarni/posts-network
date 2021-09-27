import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface AppState {
  user: string
  posts: []
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
  },
});

export const { setUser, setPosts } = appSlice.actions;

export const selectUser = (state: RootState) => state.app.user;
export const selectPosts = (state: RootState) => state.app.posts;

export default appSlice.reducer;