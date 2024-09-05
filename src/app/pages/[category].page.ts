import { injectContentFiles, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import BlogListComponent from '../components/blog-list.component';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[] | string;
}

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, BlogListComponent],
  template: `<app-blog-list [posts]="filteredPosts()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryPageListing {
  category = input<string>('');

  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog'),
  ).map((post) => post.attributes);

  readonly filteredPosts = computed(() => {
    const category = this.category();
    return this.posts.filter((item) => {
      const itemCategory = item.categories;
      console.log(item);
      if (Array.isArray(itemCategory)) {
        return itemCategory.includes(category);
      } else {
        return itemCategory === category;
      }
    });
  });
}
