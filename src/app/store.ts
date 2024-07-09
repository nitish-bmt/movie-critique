import { configureStore } from '@reduxjs/toolkit';

// importing comments slice reducer{commentSlice.reducer} with alias
import movieCommentsReducer, { addComment } from '../features/movieCommentsSlice';
import movieDataReducer, {addMovie} from '../features/movieDataSlice';
import userDataReducer, {addUser} from '../features/userDataSlice';
import activeUserReducer, {loginUser, logoutUser} from '../features/activeUserSlice';

export const store = configureStore({
  reducer: {
    movieComments: movieCommentsReducer,
    movieData: movieDataReducer,
    userData: userDataReducer,
    activeUser: activeUserReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;