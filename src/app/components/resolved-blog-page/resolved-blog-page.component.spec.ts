import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedBlogPageComponent } from './resolved-blog-page.component';

describe('ResolvedBlogPageComponent', () => {
  let component: ResolvedBlogPageComponent;
  let fixture: ComponentFixture<ResolvedBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedBlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
