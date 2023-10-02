# Moneyment Blog 
## Authors: Moneyment Team ( Joey Nip, Kaitlyn Cameron, Hayden Leung, Corey J. Rutt, Giovana Birck, Jacob Skilling, Justin Wu, Sara Shiojima, Jenny)

## How to Create / Edit Blog Posts
The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Installation
```bash
npx create-next-app --example blog-starter blog-starter-app
```

# Notes
uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
