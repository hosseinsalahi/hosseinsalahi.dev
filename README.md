# hosseinsalahi.dev

Personal portfolio and blog built with Astro and Cloudflare Pages.

## Project Structure

This project follows the standard Astro directory structure:

- `src/content/`: Contains blog posts and project descriptions in Markdown.
- `src/layouts/`: Global page layouts.
- `src/pages/`: File-based routing for the website.
- `public/`: Static assets including images and favicons.

## Development

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the build locally using Wrangler |
| `npm run deploy` | Builds and deploys to Cloudflare Pages |

## Tech Stack

- **Framework:** Astro 6
- **Deployment:** Cloudflare Pages
- **Styling:** Vanilla CSS
- **Content:** Markdown with Astro Content Layer
