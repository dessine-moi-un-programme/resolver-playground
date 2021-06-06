import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResolvedBlogPageComponent } from './components/resolved-blog-page/resolved-blog-page.component';
import { BlogArticleResolver } from './resolvers/blog-article.resolver';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'usualBlogPage/:id', component: BlogPageComponent },
  { 
    path: 'resolvedBlogPage/:id', 
    component: ResolvedBlogPageComponent,
    resolve: {
      blogArticle: BlogArticleResolver
    }
  },
  { path: 'not-found', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
