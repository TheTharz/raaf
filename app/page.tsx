
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-3xl space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="relative inline-block">
          <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-pulse mx-auto" />
          <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-4 animate-bounce" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-rose-900 tracking-tight">
          Share the Love <br />
          <span className="text-rose-500">Instantly.</span>
        </h1>

        <p className="text-xl md:text-2xl text-rose-800/80 max-w-xl mx-auto leading-relaxed">
          Create a beautiful, personalized Valentine's Day card in seconds. No signup, no fuss—just love.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/create">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-105 transition-all">
              Create Your Valentine
            </Button>
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/5] bg-white rounded-lg shadow-sm rotate-2 hover:rotate-0 transition-transform duration-500" />
          ))}
        </div>

        <footer className="text-rose-400 text-sm mt-20">
          Made with ❤️ for Valentine's Day
        </footer>
      </div>
    </main>
  );
}
