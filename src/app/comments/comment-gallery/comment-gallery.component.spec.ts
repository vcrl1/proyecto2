import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentGalleryComponent } from './comment-gallery.component';

describe('CommentGalleryComponent', () => {
  let component: CommentGalleryComponent;
  let fixture: ComponentFixture<CommentGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentGalleryComponent]
    });
    fixture = TestBed.createComponent(CommentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
