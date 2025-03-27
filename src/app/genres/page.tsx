import GenreItem from "@/components/genre-item";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

async function getGenres() {
    const response = await fetch("http://localhost:8080/genres")
    return await response.json();
}

export default async function GenresPage() {
    const data: Array<Genre> = await getGenres()
    return (
        <>
            <NavBar active="genres"/>

            <main className="flex justify-center items-center">
                <div className="bg-[#8BAAAD] min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold">Gêneros</h2>

                    {
                        data.length == 0 ? 
                        <Alert>
                            <CircleAlert />
                            <AlertDescription >
                                Nenhum gênero cadastrado!
                            </AlertDescription>
                        </Alert> : ""
                    }

                    {
                        data.map(genre => <GenreItem key={genre.id} genre={genre}/>)
                    }
                </div>
            </main>
        </>
    )
}