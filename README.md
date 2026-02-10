# Raaf Romance 💖

A beautiful, frontend-only Valentine's Day card generator built with Next.js and Tailwind CSS. Create personalized, animated cards and share them instantly via a unique link.

## Features

-   **Zero Backend**: All card data is stored in the URL (Base64 encoded), making it privacy-focused and serverless.
-   **14+ Unique Themes**: Choose from styles like Romantic, Neon Glow, Retro, Cyber, Nature, and more.
-   **Live Preview**: Real-time card editing with a mobile-first sticky preview.
-   **Message Suggestions**: Stuck on words? Hit "Surprise Me" for a romantic suggestion.
-   **Instant Sharing**: Generate a link to share your card anywhere.
-   **Downloadable**: Save your card as a high-quality PNG image.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Image Generation**: `html-to-image`
-   **Fonts**: Inter, Playfair Display, Great Vibes

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/raaf-romance.git
    cd raaf-romance
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/new). Since it has no backend database, it can be deployed as a static export or a standard Next.js app.

## License

MIT
