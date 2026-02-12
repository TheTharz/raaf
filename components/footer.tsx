import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          Made with 💖 by{" "}
          <a
            href="https://github.com/TheTharz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pink-600 hover:underline dark:text-pink-400"
          >
            TheTharz
          </a>
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/privacy"
            className="hover:text-pink-600 hover:underline dark:hover:text-pink-400"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <a
            href="https://github.com/TheTharz/raaf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 hover:underline dark:hover:text-pink-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}