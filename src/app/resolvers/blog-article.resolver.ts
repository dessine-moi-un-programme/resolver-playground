import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogArticle } from '../models/BlogArticle.model';
import { BlogHttpService } from '../services/blog-http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogArticleResolver implements Resolve<BlogArticle | null> {

  constructor(private blogHttpService: BlogHttpService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogArticle | null> {    
    const articleBlogId = route.params.id;
    return this.blogHttpService.getBlogArticle(articleBlogId).pipe(catchError((error: any) => {
        if (error.status == 404) {
          this.router.navigate(['/not-found']);
          return of(null);
        } else {
          this.router.navigate(['/not-found']);
          return of(null);
        }
      })
      );
  }
}
