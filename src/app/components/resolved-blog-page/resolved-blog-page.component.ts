import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogArticle } from 'src/app/models/BlogArticle.model';

@Component({
  selector: 'app-resolved-blog-page',
  templateUrl: './resolved-blog-page.component.html',
  styleUrls: ['./resolved-blog-page.component.scss']
})
export class ResolvedBlogPageComponent implements OnInit {

  blogArticle: BlogArticle = {
    title: '',
    description: '',
    tags: [],
    content: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogArticle = this.route.snapshot.data.blogArticle;
  }

}
