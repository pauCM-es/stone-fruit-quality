import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { catalogueApi } from '../UI/catalogue/catalogue.service'
import catalogueSlice from '../UI/catalogue/catalogue.slice'

const rootReducer = combineReducers({
  [catalogueApi.reducerPath]: catalogueApi.reducer,
  catalogue: catalogueSlice
})

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch