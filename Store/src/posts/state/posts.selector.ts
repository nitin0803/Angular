import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostsState } from "./posts.state";

export const POSTS_STORE_STATE = 'posts';
const getPostsState = createFeatureSelector<IPostsState>(POSTS_STORE_STATE);

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

export const getPostById = (id: number) => createSelector(getPostsState, (state) => {
    return state.posts.find((p) => p.id === id);
})