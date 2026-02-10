
export interface CardConfig {
    to: string;
    from: string;
    message: string;
    templateId: string;
    fontId: string;
}

export const encodeCardData = (data: CardConfig): string => {
    try {
        const json = JSON.stringify(data);
        return btoa(encodeURIComponent(json));
    } catch (error) {
        console.error("Failed to encode card data:", error);
        return "";
    }
};

export const decodeCardData = (encoded: string): CardConfig | null => {
    try {
        const json = decodeURIComponent(atob(encoded));
        return JSON.parse(json);
    } catch (error) {
        console.warn("Failed to decode card data:", error);
        return null;
    }
};
