import AppLayout from "@/Layouts/Applayout";
import SectionTitle from "@/Components/SectionTitle";
import FeaturedMovieCard from "@/Components/FeaturedMovieCard";
import MovieCard from "@/Components/MovieCard";
import { featuredMovies, browseMovies } from "@/Data/Movies";

export default function Home() {
    return (
        <AppLayout>
            {/* Featured */}
            <section className="mb-10">
                <SectionTitle right="See all">Featured Movies</SectionTitle>

                <div className="grid grid-cols-3 gap-6">
                    {featuredMovies.map((movie, idx) => (
                        <FeaturedMovieCard
                            key={movie.id}
                            movie={movie}
                            large={idx === 0}
                        />
                    ))}
                </div>
            </section>

            {/* Browse */}
            <section>
                <SectionTitle right="View more">Browse</SectionTitle>

                <div className="grid grid-cols-5 gap-6">
                    {browseMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}
