import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/genres"

export async function createGenre(initialState: any, formData: FormData) {
    
    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    const response = await fetch(API_URL, options)


    if (!response.ok) {
        const errors = await response.json()
        return {
            values: {
                name: formData.get("name"),
                icon: formData.get("icon")
            },
            errors: {
                name: errors.find(e => e.field === "name")?.message,
                icon: errors.find(e => e.field === "icon")?.message
            }
        }
    }
    redirect("/genres")
}

export async function getGenres() {
    const response = await fetch(API_URL)
    return await response.json();
}

export async function setFavoriteStar({ id }: Genre) {
    try {
        const response = await fetch(`${API_URL}/${id}/favorite`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to toggle favorite");
        }

        return await response.json();
    } catch (error) {
        console.error(`Error toggling favorite for genre with id ${id}:`, error);
        throw error; // Re-throw the error for further handling
    }
}