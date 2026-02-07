# Static Personal Brand Website

A static website built with Next.js (SSG) and Sanity CMS, designed for GitHub Pages deployment.

## Features
- **Static Generation**: Uses `next export` for pure static HTML/CSS/JS.
- **Sanity CMS**: Fully editable content (Texts, Images, Colors, SEO).
- **Theming**: Global and section-level color control from Sanity.
- **Responsive**: Mobile-friendly design.
- **Services, Testimonials, Blog**: Dynamic content modeled in Sanity.

## Project Structure
- `/web`: Next.js frontend application.
- `/studio`: Sanity Studio backend configuration.

## Setup Instructions

### 1. Sanity Setup
1.  Navigate to the `studio` folder: `cd studio`
2.  Install dependencies: `npm install`
3.  Login to Sanity: `npx sanity login`
4.  Create a new project (if you haven't):
    - `npx sanity init` (follow prompts, or just copy the Project ID if you have one).
    - Note: This project is already configured. You just need to update the `projectId` in `sanity.cli.js` and `sanity.config.js`.
5.  Get your **Project ID** and **Dataset** name (usually `production`).
6.  Update `studio/sanity.cli.js` and `studio/sanity.config.js` with your Project ID.

### 2. Frontend Setup
1.  Navigate to the `web` folder: `cd web`
2.  Install dependencies: `npm install`
3.  Create `.env.local` file:
    ```bash
    cp .env.local.example .env.local
    ```
4.  Edit `.env.local` and add your Sanity Project ID:
    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

### 3. Running Locally
1.  Start Sanity Studio: `cd studio && npm run dev` (Runs on http://localhost:3333)
2.  Start Next.js App: `cd web && npm run dev` (Runs on http://localhost:3000)

### 4. Deployment (GitHub Pages)

This project is configured for `next export`.

1.  Push code to GitHub.
2.  Go to repository **Settings** > **Pages**.
3.  Source: **GitHub Actions**.
4.  Use the "Next.js" workflow template provided by GitHub, or create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - name: Install dependencies
        run: cd web && npm ci
      - name: Build and Export
        env:
          NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_SANITY_PROJECT_ID }}
          NEXT_PUBLIC_SANITY_DATASET: production
        run: |
          cd web
          npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: web/out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

**Important**: You must add `NEXT_PUBLIC_SANITY_PROJECT_ID` to your GitHub Repository Secrets.

## Customization
- **Colors**: Go to Sanity Studio > Theme Settings to change global colors.
- **Content**: Update Brand, Founder, Services, etc. in Sanity Studio.
