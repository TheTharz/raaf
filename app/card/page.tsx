
"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toPng } from "html-to-image";
import { CardConfig, decodeCardData } from "@/lib/card-data";
import { CardPreview } from "@/components/card-preview";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, Plus, Share2 } from "lucide-react";
import Link from "next/link";

function CardContent() {
    const searchParams = useSearchParams();
    const [data, setData] = useState<CardConfig | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        const d = searchParams.get("d");
        if (d) {
            const decoded = decodeCardData(d);
            if (decoded) {
                setData(decoded);
            } else {
                console.error("Invalid card data");
            }
        }
    }, [searchParams]);

    const handleDownload = () => {
        if (!cardRef.current) return;
        setIsDownloading(true);

        toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `valentine-${data?.to || "card"}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error("Failed to download image", err);
                alert("Failed to download image. Please try again.");
            })
            .finally(() => {
                setIsDownloading(false);
            });
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy link", err);
        }
    };


    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-rose-50">
                <div className="text-center space-y-4">
                    <Sparkles className="w-12 h-12 text-rose-400 mx-auto animate-spin" />
                    <p className="text-rose-800 font-medium">Loading love letter...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-rose-50 py-12 px-4 flex flex-col items-center gap-8">

            <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-3xl font-bold text-rose-900">Your Valentine is Here!</h1>
                <p className="text-rose-700">Someone sent you a special message.</p>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative">
                    <CardPreview data={data} forwardedRef={cardRef} className="bg-white" />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto">
                <Button onClick={handleDownload} className="flex-1" size="lg" disabled={isDownloading}>
                    <Download className="mr-2 h-4 w-4" />
                    {isDownloading ? "Saving..." : "Save Card"}
                </Button>
                <Button onClick={handleShare} variant="outline" className="flex-1" size="lg">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Link
                </Button>
            </div>

            <Link href="/create" className="mt-8">
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-rose-100">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your Own
                </Button>
            </Link>
        </div>
    );
}

export default function CardPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-rose-50">Loading...</div>}>
            <CardContent />
        </Suspense>
    )
}
