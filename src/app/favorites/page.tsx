import NavBar from "@/components/nav-bar";

export default function FavoritesPage() {
    return (
        <>
            <NavBar active="favorites"/>

            <main className="flex justify-center items-center">
                <div className="bg-secondary min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-medium text-white">Favoritos</h2>
                </div>
            </main>
        </>
    )
}