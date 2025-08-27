# Assignment Info & What's Next

This is a single page static site, as a part of the assignment this has semantic tags, type-safe functions in React, Typescript environment.

> Submitted by Emran H

# Tech Stack

Next.js, Typescript, Tailwind-CSS, Node.js runtime

# UI

The UI is split into modular parts. For example, Using atomic design principle, atoms are in the UI folder, organisms are in the Components folder, and templates are in the Sections folder.

#### What's missing & What's next ?

Let's talk about what is missing from a High level POV:

- **Security & Compliance**
  Security can be hardened via X-Content-Type-Options, X-Frame-Options, XSS protection, CSRF, Referrer Policy

- **Auth layer**
  O-Auth, Clerk, Next-Auth etc. can be easy to implement auth layer.

- **Dependencies and Supply Chain**
  Freezing lock file in CI to avoid supply chain drift, enabling dependabot etc.

- **Data layer**
  Basically a database is missing.

Now let's assume all of the above has been implemented. What are the next steps to make it production ready ?

- **Unit Testing**
  Comprehensive testing of the pure funcitons. For example: Vitest, Jest etc.

- **SEO and Analytics**
  Fill in the metadata, next-sitemap, Google Analytics etc.

- **Accessibility**
  Although semantic tags are being used, there is room for ARIA attributes.

- **Performance**
  Avoiding unbounded server components doing client only work, add a bundle analyzer to catch large deps etc.
