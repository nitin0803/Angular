import { createAction, props } from "@ngrx/store";
import { IPost } from "../postslist/post.model";

const ACTION_ADD_POST = '[Add Post] New post';
const ACTION_UPDATE_POST = '[Edit Post] Update post';
const ACTION_DELETE_POST = '[Delete Post] Delete post';

export const addPostAction = createAction(ACTION_ADD_POST,
    props<{post: IPost}>());

export const updatePostAction = createAction(ACTION_UPDATE_POST,
    props<{post: IPost}>());

export const deletePostAction = createAction(ACTION_DELETE_POST, 
    props<{id: number}>());