import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-12 md:px-12 lg:px-24">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-white/5 text-brand-accent text-sm font-medium animate-float">
          <Sparkles className="w-4 h-4" />
          <span>Premium Party Experience</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
          Charades<span className="text-gradient">PRO</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          The ultimate ad-free charades experience. 18 categories, tilt-to-score mechanics, and zero distractions.
        </p>
      </header>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Pick a Category</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-8 hidden md:block" />
          <span className="text-slate-500 text-sm">{categories.length} Total</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto mt-24 pb-12 text-center text-slate-500 text-sm">
        <p>Built for the best party experience. Ad-free & Privacy-First.</p>
        <div className="mt-4 flex justify-center gap-6">
          <span className="hover:text-slate-300 transition-colors cursor-help">How to Play</span>
          <span className="hover:text-slate-300 transition-colors cursor-help">Settings</span>
          <span className="hover:text-slate-300 transition-colors cursor-help">Privacy</span>
        </div>
      </footer>
    </main>
  );
}
