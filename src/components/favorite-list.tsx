import GenreItem from "./genre-item";

export default function FavoriteList({ genres }: { genres: Genre[] }) {
    if (genres.length === 0) {
        return <p className="text-white">Nenhum favorito encontrado.</p>;
    }

    return (
        <div className="flex flex-col gap-4">
            {genres.map((genre) => (
                <GenreItem key={genre.id} genre={genre} /> // Reutiliza o componente GenreItem
            ))}
        </div>
    );
}