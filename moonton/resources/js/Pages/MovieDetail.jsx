import AppLayout from "@/Layouts/AppLayout";
import { featuredMovies, browseMovies } from "@/Data/Movies";
import useFavorites from "@/Hooks/useFavorites";
import { router } from "@inertiajs/react";
import VideoPlayer from "@/Components/VideoPlayer";
import { useMemo } from "react";

export default function MovieDetail({ id }) {
    // Gabungkan data
    const allMovies = [...featuredMovies, ...browseMovies];

    // Favorite handler
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    // Cari movie berdasarkan id
    const movie = useMemo(() => allMovies.find((m) => m.id == id), [id]);

    if (!movie) {
        return (
            <AppLayout>
                <div className="text-center mt-20 text-gray-500 text-lg">
                    Film tidak ditemukan 😢
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <div className="max-w-5xl mx-auto pt-4">
                {/* Back Button */}
                <button
                    onClick={() => router.visit("/")}
                    className="mb-4 text-sm flex items-center gap-2 hover:text-orange-500 transition"
                >
                    ← Back to Home
                </button>

                {/* Video Player */}
                <VideoPlayer url={movie.video} movieId={movie.id} />

                {/* Movie Info */}
                <h1 className="text-3xl font-bold mt-6">{movie.title}</h1>
                <p className="text-gray-400 text-sm">{movie.genre}</p>

                <div className="flex items-center gap-3 mt-3 text-gray-500">
                    <span className="text-yellow-400">★ {movie.rating}</span>
                    <span>•</span>
                    <span>2022</span>
                    <span>•</span>
                    <span>2h 12m</span>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus impedit ratione...
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:opacity-90 transition">
                        ▶ Watch Now
                    </button>

                    <button
                        onClick={() =>
                            isFavorite(movie.id)
                                ? removeFavorite(movie.id)
                                : addFavorite(movie)
                        }
                        className={`px-6 py-3 rounded-xl font-semibold transition ${
                            isFavorite(movie.id)
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {isFavorite(movie.id)
                            ? "💔 Remove Favorite"
                            : "❤️ Add to Favorites"}
                    </button>
                </div>

                {/* Recommended Movies */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-4">
                        You may also like
                    </h2>

                    <div className="grid grid-cols-5 gap-6">
                        {browseMovies.slice(0, 5).map((m) => (
                            <div
                                key={m.id}
                                onClick={() => router.visit(`/movie/${m.id}`)}
                                className="cursor-pointer group"
                            >
                                <img
                                    src={m.image}
                                    className="rounded-xl w-full h-40 object-cover group-hover:scale-105 transition"
                                />
                                <p className="text-sm font-semibold mt-2">
                                    {m.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
