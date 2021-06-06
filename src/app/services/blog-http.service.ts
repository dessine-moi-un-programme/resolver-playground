import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { BlogArticle } from '../models/BlogArticle.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  firstBlogArticle: BlogArticle = {
    title: 'Mon super article de blog',
    description: 'La desription d\'un article de blog',
    tags: ['#demo'],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }

  constructor() { }

  getBlogArticle(blogArticleId: number): Observable<BlogArticle> {
    return new Observable((observer: Observer<BlogArticle>) => {
      setTimeout(() => {
        if (blogArticleId == 1) {
          observer.next(this.firstBlogArticle);
          observer.complete();
        } else {
          observer.error({status: 404, msg: 'Not found'});
        }
      }, 1000);
    });
  }
}
