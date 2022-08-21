import { IPost } from "../postslist/post.model"

export interface IPostsState {
    posts: IPost[]
}

export const initialPosts : IPostsState = {
    posts: [
        {id: 1, title: 'First post', description: 'I loved your Videos'},
        {id: 2, title: 'Second post', description: 'I loved your Songs'},
    ]
}