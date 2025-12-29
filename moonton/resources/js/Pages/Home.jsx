import AppLayout from "@/Layouts/AppLayout";
import SectionTitle from "@/Components/UI/SectionTitle";
import FeaturedMovieCard from "@/Components/Movies/FeaturedMovieCard";
import MovieCard from "@/Components/Movies/MovieCard";
import { featuredMovies, browseMovies } from "@/Data/movies";

export default function Home() {
    return (
        <AppLayout>
            {/* Featured */}
            <section className="mb-10 px-4 md:px-0">
                <SectionTitle right="See all">Featured Movies</SectionTitle>

                <div
                    className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    gap-4 
                    md:gap-6
                "
                >
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
            <section className="px-4 md:px-0">
                <SectionTitle right="View more">Browse</SectionTitle>

                <div
                    className="
                    grid 
                    grid-cols-2 
                    sm:grid-cols-3 
                    lg:grid-cols-5 
                    gap-4 
                    md:gap-6
                "
                >
                    {browseMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}
