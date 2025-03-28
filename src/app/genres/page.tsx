import { getGenres } from "@/actions/genre-action";
import GenreItem from "@/components/genre-item";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CircleAlert, Plus } from "lucide-react";
import Link from "next/link";

export default async function GenresPage() {
    const data: Array<Genre> = await getGenres()
    return (
        <>
            <NavBar active="genres"/>

            <main className="flex justify-center items-center">
                <div className="bg-secondary min-w-2/3 p-6 rounded m-6">
                    <div className="flex justify-between mb-3">
                        <h2 className="text-lg font-medium text-white">Gêneros</h2>

                        <Button asChild>
                            <Link href="/genres/form">
                                <Plus />
                                Novo Gênero
                            </Link>
                        </Button>
                    </div>

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