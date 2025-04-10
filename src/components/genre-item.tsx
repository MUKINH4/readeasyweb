'use client'
import { Star } from "lucide-react";
import Icon from "./icon";
import CrudDropdown from "./crud-dropdown";
import { useEffect, useState } from "react";
import { getGenres, setFavoriteStar } from "@/actions/genre-action";

export default function GenreItem({ genre }: GenreProps) {

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        async function fetchFavoriteStatus() {
            try {
                const genres = await getGenres();
                const currentGenre = genres.find((g: Genre) => g.id === genre.id);
                if (currentGenre) {
                    setFavorite(currentGenre.favorite);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchFavoriteStatus();
    }, [genre.id]);

    async function handleFavorite() {
        try {
            const updatedGenre = await setFavoriteStar(genre);
            setFavorite(updatedGenre.favorite);
        } catch (error) {
            console.error("Falha ao alternar favorito: ", error);
        }
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-x-2 text-white">
                <Icon name={genre.icon}/>
                <span>{genre.name}</span>
            </div>
            <div className="flex gap-x-3">
                <button onClick={handleFavorite} className="hover:cursor-pointer">
                    {
                        favorite ? <Star fill="yellow" /> : <Star color="white"/>
                    }
                    
                </button>
                <CrudDropdown id={genre.id} />
            </div>
        </div>
    )
}