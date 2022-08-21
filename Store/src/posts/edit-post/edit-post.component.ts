import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { IPost } from "../postslist/post.model";
import { updatePostAction } from "../state/posts.action";
import { getPostById } from "../state/posts.selector";
import { IPostsState } from "../state/posts.state";

@Component({
    templateUrl: './edit-post.view.html'
})
export class EditComponent implements OnInit{
    postForm!: FormGroup;
    post!: IPost;

    constructor(private route: ActivatedRoute, 
                private store: Store<IPostsState>,
                private router: Router) {
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe((param) => {
            const id = +param.get('id')!;
            this.store.select(getPostById(id)).subscribe((data) => {
                this.post = data!
                console.log(this.post);
                this.createForm();
            })
        })
    }

    createForm(){        
        this.postForm = new FormGroup(
            {
                title: new FormControl(this.post.title, [Validators.required, Validators.minLength(10)]),
                description: new FormControl(this.post.description, [Validators.required, Validators.maxLength(50)])
            }
        )
    }

    OnUpdate(){        
        if(!this.postForm.valid)
        {
            return;
        }

        const editedPost: IPost = {
            id: this.post.id,
            title: this.postForm.value.title,
            description: this.postForm.value.description
        }
        this.store.dispatch(updatePostAction( { post: editedPost } ));
        this.router.navigate(['posts']);
    }
    showTitleError(){
        const titleFormControl = this.postForm.get('title');

        if(titleFormControl?.touched && !titleFormControl.valid)
        {
            if(titleFormControl.errors?.['required'])
            {
                return "Title is required field!";
            }
        }
        return null;
    }

    showDescriptionError()
    {
        const descriptionControl = this.postForm.get('description');
        if(descriptionControl?.touched && !descriptionControl.valid)
        {
            if(descriptionControl.errors?.['required']){
                return "Description is required field!";
            }
        }
        return null;
    }
}