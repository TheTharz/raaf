export const fonts = [
    { id: "inter", name: "Inter", className: "font-sans" },
    { id: "serif", name: "Serif", className: "font-serif" },
    { id: "mono", name: "Mono", className: "font-mono" },
    { id: "cursive", name: "Cursive", className: "font-cursive" }, // We might need to add a cursive font in globals.css or tailwind config
];

export interface Template {
    id: string;
    name: string;
    bgClass: string;
    textClass: string;
    accentClass: string; // Used for borders, dividers, etc.
    containerClass?: string; // For inner container styling (e.g. glassmorphism)
    overlayClass?: string; // For background patterns/gradients
    decoration?: string;
}

export const templates: Template[] = [
    {
        id: "romantic",
        name: "Romantic",
        bgClass: "bg-gradient-to-br from-rose-100 to-rose-200",
        textClass: "text-rose-900",
        accentClass: "border-rose-400",
        containerClass: "bg-white/60 backdrop-blur-sm border-2 border-rose-200 shadow-xl",
        overlayClass: "pattern-dots pattern-rose-500 pattern-bg-transparent pattern-opacity-10 pattern-size-4",
        decoration: "hearts",
    },
    {
        id: "cute",
        name: "Cute",
        bgClass: "bg-gradient-to-tr from-pink-100 via-pink-50 to-pink-200",
        textClass: "text-pink-800",
        accentClass: "border-pink-300",
        containerClass: "bg-white/80 border-4 border-dashed border-pink-300 shadow-lg rounded-3xl",
        overlayClass: "opacity-20", // Could add a cute SVG pattern here later
        decoration: "bears",
    },
    {
        id: "minimal",
        name: "Minimal",
        bgClass: "bg-slate-50",
        textClass: "text-slate-900",
        accentClass: "border-slate-800",
        containerClass: "bg-white border border-slate-200 shadow-2xl",
        decoration: "none",
    },
    {
        id: "apology",
        name: "Apology",
        bgClass: "bg-gradient-to-b from-blue-50 to-slate-100",
        textClass: "text-blue-900",
        accentClass: "border-blue-200",
        containerClass: "bg-white/90 shadow-md border-t-4 border-blue-400",
        decoration: "teardrop",
    },
    {
        id: "funny",
        name: "Funny",
        bgClass: "bg-yellow-100",
        textClass: "text-yellow-900",
        accentClass: "border-yellow-500",
        containerClass: "bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        decoration: "emoji",
    },
    {
        id: "long-distance",
        name: "Long Distance",
        bgClass: "bg-gradient-to-r from-indigo-100 to-purple-100",
        textClass: "text-indigo-900",
        accentClass: "border-indigo-300",
        containerClass: "bg-white/70 backdrop-blur-md border border-indigo-200 shadow-lg",
        overlayClass: "pattern-dots pattern-indigo-500 pattern-bg-transparent pattern-opacity-5",
        decoration: "plane",
    },
    {
        id: "retro",
        name: "Retro",
        bgClass: "bg-amber-50",
        textClass: "text-amber-900",
        accentClass: "border-amber-900/20",
        containerClass: "bg-[#fdfbf7] border border-amber-200 shadow-sm p-8",
        overlayClass: "opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]",
        decoration: "feather",
    },
    {
        id: "neon",
        name: "Neon Glow",
        bgClass: "bg-neutral-900",
        textClass: "text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]",
        accentClass: "border-pink-500",
        containerClass: "bg-neutral-900/80 border-2 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]",
        overlayClass: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-neutral-900 to-neutral-900",
        decoration: "zap",
    },
    {
        id: "nature",
        name: "Nature",
        bgClass: "bg-[#f1f8e9]", // Light soft green
        textClass: "text-emerald-800",
        accentClass: "border-emerald-300",
        containerClass: "bg-white/60 border border-emerald-200 shadow-lg rounded-tl-[3rem] rounded-br-[3rem]",
        overlayClass: "pattern-dots pattern-emerald-500 pattern-bg-transparent pattern-opacity-10",
        decoration: "leaf",
    },
    {
        id: "cyber",
        name: "Cyber",
        bgClass: "bg-slate-950",
        textClass: "text-cyan-400 font-mono",
        accentClass: "border-cyan-500",
        containerClass: "bg-slate-900 border-x-2 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] skew-x-[-2deg]",
        overlayClass: "bg-[linear-gradient(0deg,transparent_24%,rgba(34,211,238,0.05)_25%,rgba(34,211,238,0.05)_26%,transparent_27%,transparent_74%,rgba(34,211,238,0.05)_75%,rgba(34,211,238,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,211,238,0.05)_25%,rgba(34,211,238,0.05)_26%,transparent_27%,transparent_74%,rgba(34,211,238,0.05)_75%,rgba(34,211,238,0.05)_76%,transparent_77%,transparent)] bg-[length:30px_30px]",
        decoration: "gamepad",
    },
    {
        id: "sunset",
        name: "Sunset",
        bgClass: "bg-gradient-to-b from-orange-100 via-rose-100 to-purple-100",
        textClass: "text-purple-900",
        accentClass: "border-orange-300",
        containerClass: "bg-white/40 backdrop-blur-md border-t border-l border-white/60 shadow-xl rounded-2xl",
        overlayClass: "bg-gradient-to-tr from-yellow-400/20 via-transparent to-purple-500/20",
        decoration: "sun",
    },
    {
        id: "cloud9",
        name: "Cloud 9",
        bgClass: "bg-sky-50",
        textClass: "text-sky-700",
        accentClass: "border-sky-200",
        containerClass: "bg-white shadow-[0_10px_40px_-10px_rgba(14,165,233,0.3)] rounded-[2rem]",
        overlayClass: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200/30 via-transparent to-transparent",
        decoration: "cloud",
    },
    {
        id: "polaroid",
        name: "Polaroid",
        bgClass: "bg-neutral-100",
        textClass: "text-neutral-800 font-serif",
        accentClass: "border-neutral-200",
        containerClass: "bg-white shadow-2xl p-6 pb-24 rotate-1 max-w-[85%] border border-neutral-100",
        overlayClass: "pattern-dots pattern-neutral-400 pattern-bg-transparent pattern-opacity-5",
        decoration: "camera",
    },
    {
        id: "luxury",
        name: "Luxury",
        bgClass: "bg-slate-900",
        textClass: "text-yellow-400",
        accentClass: "border-yellow-600",
        containerClass: "bg-slate-900 border border-yellow-500/30 shadow-2xl shadow-yellow-900/20",
        overlayClass: "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent",
        decoration: "gem",
    },
];
