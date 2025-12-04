import { router } from "@inertiajs/react";
import useFavorites from "@/Hooks/useFavorites";

export default function MovieCard({ movie }) {
    const { isFavorite } = useFavorites();

    return (
        <div
            onClick={() => router.visit(`/movie/${movie.id}`)}
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer group"
        >
            <div className="relative h-40">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-xs group-hover:bg-orange-500 group-hover:text-white">
                    ▶
                </button>
                <div className="absolute top-2 left-2 text-[10px] bg-black/60 text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <span>★</span>
                    <span>{movie.rating.toFixed(1)}</span>
                </div>

                {/* favorite badge */}
                {isFavorite(movie.id) && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white dark:bg-red-600 px-2 py-1 text-xs rounded-full shadow">
                        ❤️ Favorite
                    </span>
                )}
            </div>
            <div className="px-3 py-3">
                <h4 className="text-sm font-semibold truncate">
                    {movie.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-1 truncate">
                    {movie.genre}
                </p>
            </div>
        </div>
    );
}
