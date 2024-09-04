import { injectContentFiles, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import BlogListComponent from '../../components/blog-list.component';
import { map } from 'rxjs';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  category: string[] | string;
}

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink, BlogListComponent],
  template: `<app-blog-list [posts]="posts" />`,
})
export default class CategoryPageListing {
  @Input() slug = '';
  private readonly route = inject(ActivatedRoute);

  readonly productId$ = this.route.paramMap.pipe(
    map((params) => params.get('slug')),
  );
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog'),
  )
    .map((post) => post.attributes)
    .filter((item) => {
      const category = item.category;
      if (Array.isArray(category)) {
        return category.includes('desiredCategory');
      } else {
        return category === 'astro';
      }
    });
  constructor() {
    console.log('posts', this.posts);
    console.log('slug', this.slug);
  }
  ngOnInit() {
    console.log('slug', this.slug);
    console.log('ngOnInit');
  }
}
