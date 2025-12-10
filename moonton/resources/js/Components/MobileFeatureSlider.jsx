export default function MobileFeaturedSlider({ movies }) {
    return (
        <div className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scrollbar-hide">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="min-w-[85%] snap-center rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 text-white">
                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                        <p className="text-sm opacity-80">{movie.genre}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
