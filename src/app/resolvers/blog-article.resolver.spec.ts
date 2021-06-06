import { TestBed } from '@angular/core/testing';

import { BlogArticleResolver } from './blog-article.resolver';

describe('BlogArticleResolver', () => {
  let resolver: BlogArticleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogArticleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
