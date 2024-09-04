import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import BlogListComponent from '../components/blog-list.component';
export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  author?: string;
  date?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, BlogListComponent],
  template: ` <app-blog-list [posts]="posts" /> `,
  styles: [],
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog'),
  ).map((item) => item.attributes);
}
