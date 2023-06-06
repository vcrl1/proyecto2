import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm = new FormGroup({
    id: new FormControl(0),
    comment: new FormControl('', [Validators.maxLength(1000)]),
    rating: new FormControl(0, [Validators.min(30)]),
    // idRestaurante: 
    // idUsuario: 

  });

  // authors: IAuthor[] = [];
  // categories: ICategory[] = [];

  constructor(
    private bookService:CommentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private restaurantService: AuthorService, //restaurant
    // private categoryService: CategoryService //se añadirá una categoría a los comentarios?¿
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.findById(id).subscribe(comment => this.loadcommentForm(comment));
    });

    // this.authorService.findAll().subscribe(data => this.authors = data);
    // this.categoryService.findAll().subscribe(data => this.categories = data);
  }

  loadcommentForm(comment: IComment): void {

    this.commentForm.reset({
      id: comment.id,
      comment: comment.comment,
      rating: comment.rating,
  

    });
  }

  save(): void {
    let id = this.commentForm.get('id')?.value ?? 0;
    let comment = this.commentForm.get('comment')?.value ?? '';
    let rating = this.commentForm.get('rating')?.value ?? '';

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
    let comment: IComment = {
      id: id,
      comment: comment,
      rating: rating,
    }

    if (id === 0) // crear nuevo libro
      this.bookService.create(comment).subscribe(comment => this.router.navigate(['/books', comment.id]));
    else // editar libro existente
      this.bookService.update(comment).subscribe(comment => this.router.navigate(['/books', comment.id]));
  }

}