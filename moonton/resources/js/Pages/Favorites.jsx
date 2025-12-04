import AppLayout from "@/Layouts/AppLayout";
import useFavorites from "@/Hooks/useFavorites";
import MovieCard from "@/Components/MovieCard";

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <AppLayout>
            <div className="px-10 py-6">
                <h1 className="text-2xl font-bold mb-6">
                    ❤️ Your Favorite Movies
                </h1>

                {favorites.length === 0 ? (
                    <div className="text-gray-500 text-lg">
                        Kamu belum punya film favorit 😢
                    </div>
                ) : (
                    <div className="grid grid-cols-5 gap-6">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
