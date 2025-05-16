# Metadata
When you define and export metadata inside a layout file (like your app/layout.tsx or app/layout.js), Next.js automatically reads and applies it to your pages at build time or server render — you do not need to manually import or use it anywhere else.

# not found tsx
a user goes to /something/that/doe snt/exist, Next.js checks your routes, finds nothing, and renders not-found.tsx if it exists.

# layout.tsx
In Next.js 13+ with the App Router, layout.tsx files must have a default export that returns a valid React component

# Why clicking an <a> tag causes a full page refresh
🔴 Problem:
When you use a regular HTML <a href="/about">About</a>, the browser:

Treats it like a classic navigation
Sends a full request to the server
Refreshes the whole page to load the new content


#  Use Next.js <Link>

import Link from 'next/link';
<Link href="/about">About</Link>

This tells Next.js: "Handle this link with client-side routing"
No page refresh
Super fast, and it can even preload pages

# Importing an image in Next.js
when importing an image in next  it gives you a structured object like:
{
  src: "/_next/static/media/white-tiger.abc123.png", // full optimized path
  width: 800,   // actual dimensions of the image
  height: 600,
  blurDataURL: "data:image/jpeg;base64,...", // tiny blur preview (optional)
  ...
}

# blurdata URL 
blurDataURL is a tiny, base64-encoded version of your image — usually super low-res (like 10×10 pixels). It’s visually blurry and meant to be a placeholder until the real image fully load


# Why using Image
Automatic Optimization: It resizes, optimizes, and compresses images automatically for faster loading.
Lazy Loading: Images load only when they’re about to enter the viewport, saving bandwidth.
Responsive: Serves the best image size for different devices, reducing unnecessary load.
Built-in Placeholders: Supports features like blurDataURL to display a smooth, blurred placeholder until the image is fully loaded.


# Remote images in Next.js
By default, Next.js blocks remote images unless you explicitly allow the domain when showing image using <Image>.
You must edit your next.config.js like this

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      }
    ]
  }
}; 


# Slug
A slug is the part of a web address (URL) that comes after the domain name and shows what the page is about — usually a few words joined by hyphens.

ex: example.com/my-cool-article
here, my-cool-article is the slug.

# Key Takeaways About Slugs & Dynamic Routes in Next.js

1. **Dynamic Routes Use Bracket Syntax:**
   - Folder names like `[slug]` define dynamic segments.
   - The name inside brackets becomes the key in the `params` object.

2. **`params` Object Is Passed Automatically:**
   - Next.js provides the dynamic parts of the URL as `params` to your page/layout components.
   - Access it via `params.slug` if your folder is `[slug]`.

3. **Folder Name Must Match `params` Key Exactly:**
   - If folder is `[course_slug]`, use `params.course_slug`.
   - Avoid hyphens in folder names to prevent confusion (use underscores or camelCase).

4. **Pages Using Dynamic Params Are `async` by Default:**
   - Your page component should be marked `async`.
   - Await `params` properly before using them (in Next.js 13+).

5. **Slugs Represent URL-friendly Identifiers:**
   - Slugs are URL parts representing resources (e.g., blog posts, courses).
   - They’re usually lowercase, no spaces, often hyphenated (e.g., `my-first-post`).

6. **Use Slugs to Build SEO-friendly URLs:**
   - Instead of query params like `/course?id=123`, slugs give `/course/react-hooks`.
   - Cleaner URLs improve user experience and SEO.

7. **You Can Transform Slugs Easily:**
   - Use JS string methods like `.toUpperCase()`, `.replace()`, or `.split()` to format slugs in your UI.

8. **Restart Dev Server After Renaming Dynamic Folders:**
   - Next.js sometimes caches routing info; restarting ensures changes apply.

---


## The parent layout applies to all nested pages unless overridden by a child layout.

##  You can't use hooks like useState or useEffect inside an async function.