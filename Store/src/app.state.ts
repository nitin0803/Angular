import { ICounterState } from "./CounterApp/State/CounterApp.State";
import { IPostsState } from "./posts/state/posts.state";

export interface IAppState {
    counter: ICounterState,
    posts: IPostsState
}