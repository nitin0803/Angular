import { createReducer, on } from "@ngrx/store";
import { addPostAction, deletePostAction, updatePostAction } from "./posts.action";
import { initialPosts } from "./posts.state";

const _postsReducer = createReducer(
    initialPosts,
    on(addPostAction, (state, action) => {
        const newPost = {...action.post};
        newPost.id = state.posts.length + 1;
        return {
            ...state,
            posts: [...state.posts, newPost]
        }
    }),
    on(updatePostAction, (state, action) => {
        const updatedPosts = state.posts.map(p => {
            return p.id === action.post.id ? action.post : p;
        })
        return {
            ...state,
            posts: updatedPosts            
        }
    }),
    on(deletePostAction, (state, action) => {
        const remainingPosts = state.posts.filter(p => p.id !== action.id);
        return {
            ...state,
            posts: remainingPosts
        }
    })
);

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}