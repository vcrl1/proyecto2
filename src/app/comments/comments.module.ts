import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentGalleryComponent } from './comment-gallery/comment-gallery.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';


@NgModule({
  declarations: [
    CommentListComponent,
    CommentGalleryComponent,
    CommentDetailComponent,
    CommentFormComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  exports:[
    CommentDetailComponent,
    CommentListComponent
  ]
})
export class CommentsModule { }
