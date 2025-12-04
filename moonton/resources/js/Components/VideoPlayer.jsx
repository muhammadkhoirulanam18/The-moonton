import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";
import useWatchProgress from "@/Hooks/useWatchProgress";

export default function VideoPlayer({ url, movieId }) {
    const [playing, setPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const { progress, saveProgress, resetProgress } = useWatchProgress(movieId);

    const playerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (progress && playerRef.current) {
            playerRef.current.seekTo(progress, "seconds");
        }
    }, [progress]);

    const handleProgress = (state) => {
        saveProgress(state.playedSeconds);
    };

    const handleEnded = () => {
        resetProgress();
        setPlaying(false);
    };

    const toggleFullscreen = () => {
        const el = containerRef.current;
        if (!document.fullscreenElement) {
            el.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-96 md:h-[500px] bg-black rounded-xl shadow-lg overflow-hidden"
        >
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={playing}
                controls
                width="100%"
                height="100%"
                onPlay={() => setPlaying(true)}
                onProgress={handleProgress}
                onEnded={handleEnded}
                progressInterval={1000}
            />

            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <button
                    onClick={toggleFullscreen}
                    className="px-3 py-2 rounded-lg text-sm bg-white/80 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition"
                >
                    {isFullscreen ? "⤫ Exit Fullscreen" : "⛶ Fullscreen"}
                </button>
            </div>
        </div>
    );
}
