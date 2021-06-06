import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BlogArticle } from 'src/app/models/BlogArticle.model';
import { BlogHttpService } from 'src/app/services/blog-http.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blogArticle: BlogArticle = {
    title: '',
    description: '',
    tags: [],
    content: ''
  };

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const blogArticleId = this.route.snapshot.params.id;
    this.blogHttpService.getBlogArticle(blogArticleId).subscribe(
      (blogArticle) => this.blogArticle = blogArticle,
      (error) => {
        if (error.status == 404) {
          this.router.navigate(['/not-found']);
          return of(null);
        } else {
          this.router.navigate(['/not-found']);
          return of(null);
        }
      }
    );
  }

}
