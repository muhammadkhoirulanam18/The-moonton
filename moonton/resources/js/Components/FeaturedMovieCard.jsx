import { router } from "@inertiajs/react";

export default function FeaturedMovieCard({ movie, large }) {
    return (
        <div
            onClick={() => router.visit(`/movie/${movie.id}`)}
            className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group ${
                large ? "h-64" : "h-64"
            }`}
        >
            <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-3 left-3 flex items-center gap-1 text-xs text-white/80">
                <span className="text-yellow-300">★</span>
                <span>{movie.rating.toFixed(1)}/5.0</span>
            </div>

            <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                ▶
            </button>

            <div className="absolute left-4 bottom-4 text-white text-white dark:text-gray-100">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-xs text-white/70 mt-1">{movie.genre}</p>
            </div>
        </div>
    );
}
