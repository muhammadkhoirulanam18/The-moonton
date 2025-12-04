import { useState, useEffect } from "react";

const STORAGE_KEY = "watch_progress";

export default function useWatchProgress(movieId) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        if (stored[movieId]) {
            setProgress(stored[movieId]);
        }
    }, [movieId]);

    const saveProgress = (time) => {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        stored[movieId] = time;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        setProgress(time);
    };

    const resetProgress = () => {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        delete stored[movieId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        setProgress(0);
    };

    return { progress, saveProgress, resetProgress };
}
