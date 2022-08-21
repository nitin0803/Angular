import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deletePostAction } from '../state/posts.action';
import { getPosts } from '../state/posts.selector';
import { IPostsState } from '../state/posts.state';
import { IPost } from './post.model';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.view.html',
})
export class PostslistComponent implements OnInit {
  posts$: Observable<IPost[]>

  constructor(private store: Store<{data: IPostsState}>) {
    this.posts$ = this.store.select(getPosts);
   }

  ngOnInit(): void {
  }

  DeletePost(id: number) {
    this.store.dispatch(deletePostAction({id}));
  }

}
