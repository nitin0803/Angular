import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditComponent } from "./edit-post/edit-post.component";
import { PostslistComponent } from "./postslist/postslist.component";
import { postsReducer } from "./state/posts.reducer";
import { POSTS_STORE_STATE } from "./state/posts.selector";

const routes: Routes = [
    {        
        path: '',
        component: PostslistComponent,
        children: [
            { 
                path: 'add',
                component: AddPostComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent
            }]
    }
]

@NgModule({
    declarations: [PostslistComponent, AddPostComponent, EditComponent],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        StoreModule.forFeature(POSTS_STORE_STATE, postsReducer)
    ]
})
export class PostsModule {

}