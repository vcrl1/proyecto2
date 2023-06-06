ng generate module comments --routing --module app.module
ng generate component comments/comment-list
ng generate component comments/comment-gallery
ng generate component comments/comment-detail
ng generate component comments/comment-form
ng generate interface comments/models/comment --type=model --prefix=I
ng generate service comments/services/comment

ng generate module books --routing --module app.module
ng generate component books/book-list
ng generate component books/book-detail
ng generate component books/book-form
ng generate interface books/models/book --type=model --prefix=I
ng generate service books/services/book