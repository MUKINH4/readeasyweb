'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash } from "lucide-react"

async function deleteGenre(id: number) {
   
    const response = await fetch(`http://localhost:8080/genres/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
    if (response.ok) {
        try {
            const data = await response.json()
            return data;
        } catch {
            return null;
        }
    } else {
        throw new Error(`Erro ao deletar: ${response.statusText}`)
    }
}

interface CrudDropdownProps {
    id: number
}

export default function CrudDropdown({ id }: CrudDropdownProps) {

    const handleDelete = async () => {
        try {
            const result = await deleteGenre(id)
            return result;
        }catch (error) {
            console.error("Erro ao deletar: ", error);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Pencil />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>
                    <Trash />
                    Apagar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}