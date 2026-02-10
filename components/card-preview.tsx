
import React from 'react';
import { CardConfig } from '@/lib/card-data';
import { templates, fonts } from '@/config/templates';
import { cn } from '@/lib/utils';
import { Heart, Smile, Frown, Plane, Sparkles, X, Feather, Zap, Leaf, Gamepad2, Sun, Cloud, Camera, Gem } from 'lucide-react'; // Example icons

interface CardPreviewProps {
    data: CardConfig;
    className?: string;
    forwardedRef?: React.Ref<HTMLDivElement>;
}

export const CardPreview = ({ data, className, forwardedRef }: CardPreviewProps) => {
    const template = templates.find((t) => t.id === data.templateId) || templates[0];
    const font = fonts.find((f) => f.id === data.fontId) || fonts[0];

    const Decoration = () => {
        switch (template.decoration) {
            case 'hearts': return <Heart className="w-12 h-12 text-rose-400 opacity-50 absolute top-4 right-4 animate-pulse" />;
            case 'bears': return <Smile className="w-12 h-12 text-pink-400 opacity-50 absolute top-4 right-4 animate-bounce" />;
            case 'teardrop': return <Frown className="w-12 h-12 text-blue-400 opacity-50 absolute top-4 right-4 animate-pulse" />;
            case 'emoji': return <Sparkles className="w-12 h-12 text-yellow-500 opacity-50 absolute top-4 right-4 animate-spin-slow" />;
            case 'plane': return <Plane className="w-12 h-12 text-indigo-400 opacity-50 absolute top-4 right-4 animate-pulse" />;
            case 'feather': return <Feather className="w-12 h-12 text-amber-800 opacity-30 absolute top-4 right-4" />;
            case 'zap': return <Zap className="w-12 h-12 text-pink-500 opacity-80 absolute top-4 right-4 animate-pulse drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]" />;
            case 'leaf': return <Leaf className="w-12 h-12 text-emerald-600 opacity-40 absolute top-4 right-4 animate-bounce" />;
            case 'gamepad': return <Gamepad2 className="w-12 h-12 text-cyan-500 opacity-60 absolute top-4 right-4 animate-pulse" />;
            case 'sun': return <Sun className="w-12 h-12 text-orange-400 opacity-60 absolute top-4 right-4 animate-spin-slow" />;
            case 'cloud': return <Cloud className="w-16 h-16 text-sky-200 opacity-80 absolute top-4 right-4 animate-pulse" />;
            case 'camera': return <Camera className="w-12 h-12 text-neutral-400 opacity-50 absolute top-4 right-4" />;
            case 'gem': return <Gem className="w-12 h-12 text-yellow-400 opacity-60 absolute top-4 right-4 animate-pulse" />;
            default: return null;
        }
    }

    // Multi-line message handling
    const messageLines = data.message.split('\n');

    return (
        // Main card container (Background + Layout)
        <div
            ref={forwardedRef}
            className={cn(
                "aspect-[4/5] w-full max-w-md mx-auto shadow-2xl rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 isolate",
                template.bgClass,
                font.className,
                className
            )}
        >
            {/* Background Decoration/Overlay */}
            {template.overlayClass && (
                <div className={cn("absolute inset-0 pointer-events-none z-0", template.overlayClass)} />
            )}

            {/* Inner Container (Glassmorphism, Borders, etc.) */}
            <div className={cn(
                "relative z-10 w-full h-full flex flex-col justify-center items-center p-6",
                template.containerClass || "scale-100" // Default scale if no container class
            )}>
                <Decoration />

                <div className="w-full space-y-6">
                    <div className="text-lg font-medium opacity-80 uppercase tracking-widest">
                        From: {data.from || "Your Valentine"}
                    </div>

                    <div className={cn("text-3xl font-bold leading-relaxed", template.textClass, template.accentClass, "border-y-2 py-6")}>
                        {messageLines.map((line, i) => (
                            <p key={i} className="min-h-[1.5em]">{line}</p>
                        ))}
                        {data.message === "" && <p className="opacity-30 italic">Your message here...</p>}
                    </div>

                    <div className="text-xl font-medium opacity-90 mt-8">
                        To: {data.to || "My Love"}
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay" />
        </div>
    );
};
