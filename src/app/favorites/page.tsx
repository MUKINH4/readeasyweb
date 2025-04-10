'use client'
import { getGenres } from "@/actions/genre-action";
import FavoriteList from "@/components/favorite-list";
import NavBar from "@/components/nav-bar";
import { useEffect, useState } from "react";

export default function FavoritesPage() {

    const [favoriteGenres, setFavoriteGenres] = useState<Genre[]>([])

    useEffect(() => {
        async function fetchFavorites() {
            const genres = await getGenres()
            const favorites = genres.filter((g: Genre) => g.favorite === true)
            setFavoriteGenres(favorites)
        }
        fetchFavorites();
    }, [])

    return (
        <>
            <NavBar active="favorites"/>

            <main className="flex justify-center items-center">
                <div className="bg-secondary min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-medium text-white">Favoritos</h2>
                    <FavoriteList genres={favoriteGenres}/>
                </div>
            </main>
        </>
    )
}