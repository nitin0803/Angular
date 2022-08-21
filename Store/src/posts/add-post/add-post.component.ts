import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app.state";
import { IPost } from "../postslist/post.model";
import { addPostAction } from "../state/posts.action";

@Component({
    templateUrl: './add-post.view.html'
})
export class AddPostComponent {
    postForm: FormGroup;
    constructor(private store: Store<IAppState>) { 
        
        this.postForm = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.minLength(10)]),
            description: new FormControl(null, [Validators.required, Validators.maxLength(50)])
        })
    }

    OnSubmit() {
        if(!this.postForm.valid)
        {
            return;
        }
        const newPost: IPost = {
            title: this.postForm.value.title,
            description: this.postForm.value.description
        }
        this.store.dispatch(addPostAction({ post: newPost }))
    }

    showTitleError(){
        const titleFormControl = this.postForm.get('title');

        if(titleFormControl?.touched && !titleFormControl.valid)
        {
            if(titleFormControl.errors?.['required'])
            {
                return "Title is required field!";
            }
            if(titleFormControl.errors?.['minlength'])
            {
                return "Title must be 10 charachters long!";
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