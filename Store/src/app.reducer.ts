import { counterReducer } from "./CounterApp/State/CounterApp.Reducer";
import { postsReducer } from "./posts/state/posts.reducer";

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}