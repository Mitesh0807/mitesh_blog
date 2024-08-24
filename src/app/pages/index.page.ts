import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-screen ">
      <nav class="flex items-center flex-wrap p-5">
        <a
          href="/"
          class="font-bold mr-5 text-2xl inline-flex items-center uppercase"
          >Mitesh</a
        >
        <div class="ml-auto">
          <div class="relative inline-block">
            <a
              href="/blog/rss.xml"
              target="_blank"
              class="h-12 w-12 p-1 inline-flex items-center justify-center rounded-full focus:outline-none hover:text-gray-700 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="RSS Icon"
                fill="currentColor"
                stroke="none"
                width="28"
                height="28"
                class="inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3C12.9411 3 21 11.0589 21 21H18C18 12.7157 11.2843 6 3 6V3ZM3 10C9.07513 10 14 14.9249 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="relative inline-block">
            <button
              id="button-dark-mode"
              class="h-12 w-12 p-1 inline-flex items-center justify-center rounded-full focus:outline-none hover:text-gray-700 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Sun Icon"
                fill="currentColor"
                stroke="none"
                width="30"
                height="30"
                class="inline-block"
                viewBox="0 0 20 20"
                id="light-mode-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Moon Icon"
                fill="currentColor"
                stroke="none"
                width="30"
                height="30"
                class="inline-block"
                viewBox="0 0 20 20"
                id="dark-mode-icon"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

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
            <!-- Repeat this block for each blog post -->
            <div class="my-20">
              <a
                href="/blog/mongodb-duplicate-key-error"
                class="group focus:outline-none"
              >
                <h2
                  class="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline"
                >
                  Catching MongoDB E11000 duplicate key error in Node.js
                </h2>
                <p class="my-5 prose dark:prose-dark">
                  Unique indexes are useful in MongoDB for preventing duplicate
                  data. Here's how I catch the duplicate key error so I can send
                  a human-readable response to let users know what the problem
                  is.
                </p>
              </a>
              <p class="prose prose-sm dark:prose-dark">
                Written
                <span>by <a href="/blog/author/mitesh">Mitesh</a></span>
                <span>in <a href="/blog/node">Node.js</a></span> on August 16th,
                2024
              </p>
            </div>
            <!-- Repeat this block for each blog post -->
          </div>

          <div class="w-full my-5 lg:order-last lg:mt-auto">
            <div
              class="p-5 text-center font-medium text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60 w-full"
            >
              <div class="inline-block p-3 text-gray-300 dark:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Previous"
                  fill="currentColor"
                  stroke="none"
                  width="18"
                  height="18"
                  class="inline-block -mt-0.5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                class="inline-block p-3 text-gray-900 dark:text-gray-100 underline"
              >
                1
              </div>
              <a href="/blog/page/2" class="inline-block p-3">2</a>
              <a href="/blog/page/3" class="inline-block p-3">3</a>
              <a href="/blog/page/4" class="inline-block p-3">4</a>
              <a href="/blog/page/5" class="inline-block p-3">5</a>
              <a href="/blog/page/2" class="inline-block p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Next"
                  fill="currentColor"
                  stroke="none"
                  width="18"
                  height="18"
                  class="inline-block -mt-0.5"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="lg:w-1/3 lg:p-5">
            <div class="my-16">
              <h3 class="uppercase text-sm font-bold py-2 text-gray-500">
                <a href="/blog">Categories</a>
              </h3>
              <ul class="text-xl font-medium leading-loose">
                <li><a href="/blog/code">Code</a></li>
                <li><a href="/blog/deploy">Deploy</a></li>
                <li><a href="/blog/javascript">JavaScript</a></li>
                <li><a href="/blog/node">Node.js</a></li>
                <li><a href="/blog/projects">Projects</a></li>
                <li><a href="/blog/react">ReactJS</a></li>
                <li><a href="/blog/software">Software</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer class="px-5 py-10 mt-auto text-sm">
        <div class="text-center">
          <a href="/" class="font-semibold">Mitesh</a> © 2024
        </div>
      </footer>
    </div>
  `,
  styles: [],
})
export default class HomeComponent {}
