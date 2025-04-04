"use client"

import { createGenre } from "@/actions/genre-action";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    },
    errors: {
        name: "",
        icon: ""
    }
}

export default function GenreFormPage() {

    const [state, formAction, pending] = useActionState(createGenre, initialState)

    return (
        <>
            <NavBar active="genres"/>

            <main className="flex justify-center items-center">
                <div className="bg-secondary min-w-2/3 p-6 rounded m-6">
                    <h2 className="mb-3 text-lg font-medium text-white">Cadastrar Gênero</h2>
                    <div>
                        <form action={formAction} className="space-y-4">
                            <Input name="name" placeholder="Nome do gênero" color="white"/>
                            <Input name="icon" placeholder="Ícone" color="white"/>
                            
                            <div className="flex justify-around mt-3">
                                <Button asChild variant="outline">
                                    <Link href="/genres" >
                                        <ArrowLeft />
                                        Cancelar
                                    </Link >
                                </Button>

                                <Button>
                                    <Check />
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}