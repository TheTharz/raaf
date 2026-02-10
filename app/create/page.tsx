
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CardConfig, encodeCardData } from "@/lib/card-data";
import { templates, fonts } from "@/config/templates";
import { CardPreview } from "@/components/card-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select"; // We'll need to adapt Select usage if it's the native one
import { ArrowRight, Loader2 } from "lucide-react";

export default function CreatePage() {
    const router = useRouter();
    const [formData, setFormData] = useState<CardConfig>({
        to: "",
        from: "",
        message: "",
        templateId: templates[0].id,
        fontId: fonts[0].id,
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);

        // Simulate a brief delay for UX
        await new Promise((resolve) => setTimeout(resolve, 800));

        const encoded = encodeCardData(formData);
        router.push(`/card?d=${encoded}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
            {/* Editor Panel */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 border-r border-slate-200 overflow-y-auto h-screen sticky top-0 z-20 shadow-lg md:shadow-none">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    Details
                    <span className="text-rose-500 text-sm font-normal bg-rose-50 px-2 py-1 rounded-full">Step 1</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="to">To</Label>
                        <Input
                            id="to"
                            name="to"
                            placeholder="Their Name"
                            value={formData.to}
                            onChange={handleInputChange}
                            required
                            maxLength={30}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="from">From</Label>
                        <Input
                            id="from"
                            name="from"
                            placeholder="Your Name"
                            value={formData.from}
                            onChange={handleInputChange}
                            required
                            maxLength={30}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Write something sweet..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="resize-none h-32"
                            maxLength={200}
                        />
                        <p className="text-xs text-slate-400 text-right">{formData.message.length}/200</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="templateId">Theme</Label>
                        <div className="grid grid-cols-3 gap-2">
                            {templates.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, templateId: t.id })}
                                    className={`text-xs p-2 rounded border transition-all ${formData.templateId === t.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-200' : 'border-slate-200 hover:border-slate-300'}`}
                                >
                                    {t.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fontId">Font Style</Label>
                        <select
                            id="fontId"
                            name="fontId"
                            value={formData.fontId}
                            onChange={handleInputChange}
                            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                        >
                            {fonts.map((f) => (
                                <option key={f.id} value={f.id}>{f.name}</option>
                            ))}
                        </select>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isGenerating}>
                        {isGenerating ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                            </>
                        ) : (
                            <>
                                Generate Card <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>
            </div>

            {/* Preview Panel */}
            <div className="flex-1 bg-slate-100 p-8 flex items-center justify-center min-h-[50vh] md:h-screen overflow-hidden relative">
                <div className="absolute inset-0 pattern-dots pattern-slate-200 pattern-bg-transparent pattern-size-4 pattern-opacity-20" /> {/* Abstract pattern */}

                <div className="w-full max-w-md transform transition-all duration-500 hover:scale-[1.02]">
                    <CardPreview data={formData} className="shadow-2xl ring-1 ring-slate-900/5" />
                </div>
            </div>
        </div>
    );
}
