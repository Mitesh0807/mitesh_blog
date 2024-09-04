import { NgFor } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PaginationComponent } from './pagination.component';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  author?: string;
  date?: string;
  category?: string | string[];
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, PaginationComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <div class="flex flex-col flex-grow">
        <div class="p-5">
          <div class="max-w-3xl mx-auto text-center mt-10 py-10">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
            >
              Mitesh's Blog
            </h1>
            <div class="md:text-lg py-10 prose dark:prose-dark">
              <p>
                Hello! I am Mitesh and I love to code. JavaScript is my
                favourite flavour. I blog about coding, software and my
                projects.
              </p>
            </div>
          </div>
        </div>
        <div
          class="m-5 flex-grow max-w-screen-lg lg:mx-auto lg:flex lg:flex-wrap"
        >
          <div class="lg:pr-20 lg:w-2/3">
            @for (post of posts(); track post.slug) {
              <div class="my-20">
                <a
                  [routerLink]="['/blog', 'posts', post.slug]"
                  class="group focus:outline-none"
                >
                  <h2
                    class="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline"
                  >
                    {{ post.title }}
                  </h2>
                  <p class="my-5 prose dark:prose-dark">
                    {{ post.description }}
                  </p>
                </a>
                <p class="prose text-xl prose-sm dark:prose-dark">
                  Written
                  <span class=""
                    >by
                    <a
                      class="group focus:outline-none"
                      [routerLink]="['/blog/author', post.author]"
                    >
                      <span
                        class="font-extrabold group-hover:underline group-focus:underline"
                      >
                        {{ post.author }}
                      </span>
                    </a>
                  </span>
                  <span
                    >in
                    <a [routerLink]="['/blog/category', post.category]">{{
                      post.category
                    }}</a>
                  </span>
                  {{ post.date }}
                </p>
              </div>
            }
            <app-pagination
              [currentPage]="currentPage"
              [totalPages]="totalPages"
              (pageChange)="onPageChange($event)"
            ></app-pagination>
          </div>

          <div class="lg:w-1/3 lg:p-5">
            <div class="my-16">
              <h3 class="uppercase text-sm font-bold py-2 text-gray-500">
                <a href="/blog">Categories</a>
              </h3>
              <ul class="text-xl font-medium leading-loose">
                @for (category of categories; track category) {
                  <li>
                    <a [routerLink]="['/category', category]">{{
                      category
                    }}</a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class BlogListComponent {
  posts = input.required<PostAttributes[]>();
  categories = [
    'Code',
    'Deploy',
    'JavaScript',
    'Node.js',
    'Projects',
    'ReactJS',
    'Software',
    'astro'
  ];
  currentPage = 1;
  totalPages = 5; // This should be calculated based on the total number of posts
  console.log(posts,'post')
  onPageChange(page: number) {
    this.currentPage = page;
    // Here you would typically fetch the posts for the new page
    // For now, we'll just log the page change
    console.log(`Page changed to ${page}`);
  }
}
